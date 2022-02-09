export default class ExchangeService {
    constructor(exchange, apiClient) {
        this.exchange = exchange;
        this.client = apiClient
    }

    setRequestParams = (symbol, requestType, setLimit) => {
        const api = this.exchange.api;
        let params = {};
        let url = api[requestType];

        if (this.exchange.name === 'Huobi') symbol = symbol.toLowerCase();

        // Set the symbol
        if (api.symbol) {
            params = {
                params: {[api.symbol]: symbol}
            };
        } else {
            url = api[requestType] + symbol;
        }

        // Set limit
        if (setLimit) {
            params.params[api.limit] = 5
        }

        return [url, params];
    }

    getMarketData = (symbol) => {
        return new Promise(async (resolve) => {
            const noDataResponse = {
                id: this.exchange.id,
                name: this.exchange.name,
                price: null
            }
            const [url, params] = this.setRequestParams(symbol, 'marketData');
            const response = await this.client.get(url, params).catch(() => noDataResponse);

            if (response.data) {
                if ((response.data.error && response.data.error.length > 0) || response.data.status === 'error') {
                    resolve(noDataResponse);
                } else {
                    const resolvedData = this.marketDataResolver(response);
                    resolve(resolvedData);
                }
            }

            resolve(response);
        });
    }

    getTradesData = async (symbol) => {
        return new Promise(async (resolve) => {
            const noDataResponse = []
            const [url, params] = this.setRequestParams(symbol, 'tradesData', true);
            const response = await this.client.get(url, params).catch(() => noDataResponse);

            if (response.data) {
                if ((response.data.error && response.data.error.length > 0) || response.data.status === 'error') {
                    resolve(noDataResponse);
                } else {
                    const d = this.tradesDataResolver(response);
                    resolve(d);
                }
            }

            resolve(response);
        });
    }

    marketDataResolver = ({data}) => {
        const exchangeName = this.exchange.name;
        let price;

        switch (exchangeName) {
            case 'Binance': {
                price = data.price;
                break;
            }
            case 'Bitfinex': {
                price = data;
                break;
            }
            case 'Huobi': {
                price = data.tick.ask[0];
                break;
            }
            case 'Kraken': {
                price = Object.values(data.result)[0].o;
                break;
            }
            default:
                price = data;
                break;
        }

        return {
            id: this.exchange.id,
            name: exchangeName,
            price: price
        }
    }

    tradesDataResolver = ({data}) => {
        const exchangeName = this.exchange.name;
        let resolved = [];

        switch (exchangeName) {
            case 'Binance': {
                resolved = data.map(trade => {
                    return {amount: trade.qty, price: trade.price, date: trade.time}
                });
                break;
            }
            case 'Bitfinex': {
                // price = data;
                break;
            }
            case 'Huobi': {
                resolved = data.data.map(trade => {
                    return {amount: trade.data[0].amount, price: trade.data[0].price, date: trade.data[0].ts}
                });
                break;
            }
            case 'Kraken': {
                resolved = Object.values(data.result)[0].map(trade => {
                    return {amount: trade[0], price: trade[1], date: new Date()}
                })
                break;
            }
            default: break;
        }

        return resolved;
    }
}
