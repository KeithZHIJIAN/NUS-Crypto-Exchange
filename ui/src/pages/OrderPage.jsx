import * as React from 'react';

import loadable from '@loadable/component';
const OrderList = loadable(() => import('../components/OrderList'));
const Copyright = loadable(() => import('../components/Copyright'));
const Box = loadable(() => import('@mui/material/Box'));
const Toolbar = loadable(() => import('@mui/material/Toolbar'));
const Container = loadable(() => import('@mui/material/Container'));
const Grid = loadable(() => import('@mui/material/Grid'));
const Paper = loadable(() => import('@mui/material/Paper'));

export default class OrderPage extends React.Component {
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
                        {/* OrderList */}
                        <Grid item xs={10} md={8} lg={9}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <OrderList />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        );
    }
}