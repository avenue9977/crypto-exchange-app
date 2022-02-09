import Exchange from "./Exchange";

export default new Exchange(1, 'Binance', {
    url: 'https://api.binance.com/api/v3',
    symbol: 'symbol',
    marketData: '/ticker/price',
    tradesData: '/trades',
    limit: 'limit'
});
