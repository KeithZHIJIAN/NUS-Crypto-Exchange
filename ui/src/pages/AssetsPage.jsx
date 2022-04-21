import * as React from 'react';

import loadable from '@loadable/component';
const Box = loadable(() => import('@mui/material/Box'));
const Toolbar = loadable(() => import('@mui/material/Toolbar'));
const Container = loadable(() => import('@mui/material/Container'));
const Grid = loadable(() => import('@mui/material/Grid'));
const Paper = loadable(() => import('@mui/material/Paper'));
const Chart = loadable(() => import('../components/Chart'));
const Balance = loadable(() => import('../components/Balance'));
const Topup = loadable(() => import('../components/Topup'));
const YourAssets = loadable(() => import('../components/YourAssets'));
const OrderList = loadable(() => import('../components/OrderList'));
const Copyright = loadable(() => import('../components/Copyright'));
const WatchList = loadable(() => import('../components/WatchList/WatchList'));

export default class AssetsPage extends React.Component {
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
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={10} md={8} lg={9}>
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    }}
                >
                    <Chart />
                </Paper>
                </Grid>
                {/* Balance */}
                <Grid item xs={10} md={4} lg={3}>
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    }}
                >
                    <Balance />
                </Paper>
                </Grid>
                {/* Your assets */}
                <Grid item xs={10} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <YourAssets />
                </Paper>
                </Grid>
                {/* Topup */}
                <Grid item xs={10} md={4} lg={3}>
                    <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        }}
                    >
                        <Topup />
                    </Paper>
                </Grid>
                {/* OrderList */}
                <Grid item xs={10} md={8} lg={9}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <OrderList num={5}/>
                    </Paper>
                </Grid>
                {/* WatchList */}
                <Grid item xs={10} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <WatchList />
                </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
            </Container>
            </Box>
        );
    }
}