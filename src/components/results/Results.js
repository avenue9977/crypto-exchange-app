import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ExchangeServices} from "../../services/ExchangeServiceFactory";
import ResultsGrid from "./grid/ResultsGrid";
import LatestTransactionsDialog from "../transactions/LatestTransactionsDialog";
import Header from "../../layout/Header";

const Results = () => {
    const {pair} = useParams();
    const [base, quote] = pair.split('-');
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedExchange, setSelectedExchange] = useState({});

    const onDialogVisibilityChange = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setLoading(true);
        const symbol = base + quote;
        const promises = ExchangeServices.map(api => {
            return api.getMarketData(symbol);
        });

        Promise.allSettled(promises)
            .then(promises => {
                const marketData = promises.map(exchange => {
                    const marketData = exchange.value;
                    marketData.currency = base;
                    marketData.quote = quote;
                    return marketData;
                });
                setRows(marketData);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [base, quote]);

    const onPriceClicked = ({field, row}) => {
        if (field === 'price' && row.price && row.price >= 0) {
            setSelectedExchange(row);
            onDialogVisibilityChange();
        }
    }

    return <>
        <Header text={`${base.toUpperCase()} / ${quote.toUpperCase()}`}/>

        <div style={{display: 'flex', height: '100%'}}>
            <div style={{flexGrow: 1}}>
                <ResultsGrid rows={rows} isLoading={loading} onCellClicked={onPriceClicked}/>
            </div>
        </div>
        <>
            {(open) ? <LatestTransactionsDialog open={open} handleClose={onDialogVisibilityChange}
                                                exchange={selectedExchange} pair={base + quote}/> : ''}
        </>
    </>
};

export default Results;
