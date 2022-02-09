import {Box, IconButton, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import React from "react";
import {useNavigate} from "react-router-dom";

const Header = ({text}) => {
    const navigate = useNavigate();
    const onBackButtonClicked = () => navigate(-1);

    return <Box sx={{display: 'flex', alignItems: 'center', marginY: 10}}>
        <IconButton aria-label="back" onClick={() => onBackButtonClicked()} edge='start' sx={{marginRight: 2}}>
            <ArrowBack/>
        </IconButton>
        <Typography variant='h2' fontWeight={500}
                    component='h1'>{text}</Typography>
    </Box>;
}

export default Header;
