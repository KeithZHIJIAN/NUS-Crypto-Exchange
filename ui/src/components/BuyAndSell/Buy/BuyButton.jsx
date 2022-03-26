import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default class BuyButton extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
        buy: PropTypes.func  //接收传递的方法
    };

    render() {
        return (
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={async ()=>{await this.context.buy();}}>Buy</Button>
            </Stack>
        );
    }
}