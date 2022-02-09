import React from "react";
import {Box, Button, Typography} from "@mui/material";
import image from '../../assets/interchangeability.png';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <div>
            <img src={image} alt='Not found'/>
        </div>
        <Typography variant='h1' margin={5} fontWeight='bold' color='secondary'>404</Typography>
        <Typography variant='h3' marginBottom={5}>Page not found</Typography>
        <NavLink to={'/'} style={{textDecoration: 'none'}}>
            <Button variant='contained' size='large'>Back Home</Button>
        </NavLink>
    </Box>
}

export default NotFound;
