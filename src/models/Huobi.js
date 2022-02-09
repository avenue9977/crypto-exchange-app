import Exchange from "./Exchange";

export default new Exchange(3, 'Huobi', {
    url: 'https://api-aws.huobi.pro/market',
    symbol: 'symbol',
    marketData: '/detail/merged',
    tradesData: '/history/trade',
    limit: 'size'
});
