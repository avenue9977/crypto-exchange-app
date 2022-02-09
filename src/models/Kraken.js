import Exchange from "./Exchange";

export default new Exchange(4, 'Kraken', {
    url: 'https://api.kraken.com/0/public',
    symbol: 'pair',
    marketData: '/Ticker',
    tradesData: '/Trades',
    limit: 'limit'
});
