import Binance from "../models/Binance";
import Bitfinex from "../models/Bitfinex";
import Huobi from "../models/Huobi";
import Kraken from "../models/Kraken";
import axios from "axios";
import ExchangeService from "./ExchangeService";

const exchanges = [Binance, Bitfinex, Huobi, Kraken];

export const ExchangeServices = exchanges.map(exchange => {
    const apiClient = axios.create({
        baseURL: exchange.api.url
    });
    return new ExchangeService(exchange, apiClient);
});

export default ExchangeServices;

