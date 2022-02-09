import {Box, Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import React from "react";

const Transactions = ({transactions}) => {
    const divider = <Divider orientation="vertical" flexItem/>;
    const boxStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    };
    const iconProps = {
        color: 'primary',
        sx: {marginRight: 1}
    }
    const renderDate = (long) => {
        const date = new Date(long);

        if (!date) return '';

        return `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
    }

    return transactions.map(trade => {
        return <Card variant="outlined" key={trade.date} sx={{marginBottom: 2, borderRadius: 4}}>
            <CardContent>
                <Stack direction='row' alignItems='center' justifyContent={'space-between'} spacing={1}
                       divider={divider}>
                    <Box sx={boxStyles}>
                        <InventoryRoundedIcon {...iconProps} />
                        <Typography variant='h6'>{trade.amount}</Typography>
                    </Box>
                    <Box sx={boxStyles}>
                        <MonetizationOnRoundedIcon {...iconProps} />
                        <Typography variant='h6'>{trade.price}</Typography>
                    </Box>
                    <Box sx={boxStyles}>
                        <CalendarTodayRoundedIcon {...iconProps} />
                        <Typography variant='h6'>{renderDate(trade.date)}</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    });
}

export default Transactions;
