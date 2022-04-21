import * as React from 'react';

import loadable from '@loadable/component';
const Copyright = loadable(() => import('../components/Copyright'));
const CryptoCurrencyChart = loadable(() => import('../components/CryptoCurrencyChart'));
const BuyAndSellLabTabs = loadable(() => import('../components/BuyAndSell/BuyAndSellLabTabs'));
const Box = loadable(() => import('@mui/material/Box'));
const Toolbar = loadable(() => import('@mui/material/Toolbar'));
const Container = loadable(() => import('@mui/material/Container'));
const Grid = loadable(() => import('@mui/material/Grid'));
const Paper = loadable(() => import('@mui/material/Paper'));

const style = {
    position: 'relative',
    /* top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', */
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default class TradePage extends React.Component {
    render() {
        return (
            <Box
            component="main"
            sx={{
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {/* CryptoCurrencyChart */}
                <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <CryptoCurrencyChart />
                </Paper>
                </Grid>
                {/* BuyAndSell */}
                <Grid item /* xs={10} md={4} lg={3} */ >
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    /* height: 240, */
                    }}
                >
                    <div id='temp'>
                        <Box sx={style}>
                            <BuyAndSellLabTabs />
                        </Box>
                    </div>
                </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
            </Container>
            </Box>
        );
    }
}