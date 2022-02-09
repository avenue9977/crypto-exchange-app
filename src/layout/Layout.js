import {Box, Paper} from "@mui/material";

const Layout = (props) => {
    return (
        <Box sx={{display: 'flex', minHeight: '100vh'}}>
            <Box component="main" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                py: 6,
                px: 4,
                bgcolor: '#eaeff1'
            }}>
                <Paper sx={{
                    maxWidth: '80%',
                    width: '100%',
                    minHeight: '80%',
                    margin: 'auto',
                    flex: 1,
                    padding: '4rem',
                    borderRadius: 15
                }}>
                    {props.children}
                </Paper>
            </Box>
        </Box>
    );
}

export default Layout;
