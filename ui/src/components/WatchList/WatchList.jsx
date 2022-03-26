import * as React from 'react';
import WatchListContent from './WatchListContent';
import Title from '../Title';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

export default class WatchList extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
        wallet: PropTypes.array,
    };

    render() {
        const watchListContent = this.context.wallet.map(item =>
            <WatchListContent key={item.id} symbol={item.typeName} />
        );

        return (
        <React.Fragment>
            <Title>WatchList</Title>
            <Paper sx={{ p: 2, display: 'flex', flexWrap: 'wrap', }}>
                {watchListContent}
            </Paper>
        </React.Fragment>
        );
    }
}