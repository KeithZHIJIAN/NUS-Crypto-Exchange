import * as React from 'react';
import { MiniChart } from "react-ts-tradingview-widgets";

export default class WatchListContent extends React.Component {
    render() {
        return (
            <>
                {/* <MiniChart symbo="ETH" colorTheme="light" width="100%"></MiniChart> */}
                <MiniChart symbol={this.props.symbol} colorTheme="light" width="100%"/>
            </>
        );
    }
}