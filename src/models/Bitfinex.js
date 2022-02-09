import Exchange from "./Exchange";

export default new Exchange(2, 'Bitfinex', {
    url: 'https://api-pub.bitfinex.com/v2',
    symbol: '',
    marketData: '/ticker/t',
    tradesData: '/trades/t',
    limit: 'limit'
});
