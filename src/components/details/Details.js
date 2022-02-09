import React from 'react';
import {useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import Header from "../../layout/Header";
import image from '../../assets/blockchain.png';

const Details = () => {
    const {pair} = useParams();
    const [base, quote] = pair.split('-');

    return <>
        <Header text={`${base.toUpperCase()} / ${quote.toUpperCase()} Details`}/>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div>
                <img src={image} alt='No info' />
            </div>
            <Typography variant='h4' marginTop={4}>No info on what to show here</Typography>
        </Box>
    </>
}

export default Details;
