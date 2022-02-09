import React, {useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import theme from "../../layout/Theme";
import {useNavigate} from "react-router-dom";

export default function Search() {
    const [pair, setPair] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
        setPair(event.target.value);
    };

    const validateForm = () => {
        const regex = /^[A-Za-z]{3,}\/[A-Za-z]{3,}$/gm;
        return regex.test(pair);
    }

    const onSearch = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        setError(!isFormValid);

        if (!isFormValid) {
            setHelperText('Please make sure that you enter at least 3 characters followed by "/" and another 3 characters')
        } else {
            setHelperText('');
            navigate(`/${pair.split('/').join('-')}`);
        }
    }

    return <>
        <Typography variant='h2' component='h1' color='primary' fontWeight={800} marginTop={10}>
            Crypto<span style={{color: theme.palette.secondary.main, fontWeight: 600}}>EX</span>
        </Typography>
        <Typography variant='subtitle1' fontStyle='italic' marginTop={2} marginBottom={6}>
            Get prices from various exchanges with just one click
        </Typography>
        <Box autoComplete='off' noValidate>
            <form onSubmit={onSearch}>
                <TextField
                    label='Search pair'
                    placeholder='BTC/USDT'
                    type='text'
                    value={pair}
                    onChange={handleChange}
                    size='large'
                    error={error}
                    helperText={helperText}
                    autoFocus
                    required
                    sx={{marginRight: 2, width: '50%', marginBottom: 3}}
                />
                <Button variant='contained' type='submit' size='large' color='secondary'
                        sx={{py: 1.8, px: 10}}>SEARCH</Button>
            </form>
        </Box>
    </>
}


