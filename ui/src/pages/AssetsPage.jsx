import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/Chart';
import Balance from '../components/Balance';
import Topup from '../components/Topup';
import YourAssets from '../components/YourAssets';
import OrderList from '../components/OrderList';
import Copyright from '../components/Copyright';
import WatchList from '../components/WatchList/WatchList';

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