import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import ExchangeServices from "../../services/ExchangeServiceFactory";
import Transactions from "./Transactions";

const LatestTransactionsDialog = ({open, handleClose, exchange, pair}) => {
    const [trades, setTrades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const api = ExchangeServices.find(api => api.exchange.id === exchange.id);

        if (api) {
            api.getTradesData(pair)
                .then(data => {
                    setTrades(data);
                })
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false));
        }
    }, [exchange.id, pair]);

    return <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
        <DialogTitle>Latest transactions</DialogTitle>
        <DialogContent>
            {isLoading ? <CircularProgress color='primary'/> : trades.length > 0 ?
                <Transactions transactions={trades}/> :
                <Typography variant='h6'>Failed to load latest transactions</Typography>}
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
}

export default LatestTransactionsDialog;
