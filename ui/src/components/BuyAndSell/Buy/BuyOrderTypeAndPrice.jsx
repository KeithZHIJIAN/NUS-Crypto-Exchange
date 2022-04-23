import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import GenerateTypes from '../../GenerateTypes';

function BuyOrderTypeAndPriceContent(props) {

    const [values, setValues] = React.useState({
        price: 0,
        orderType: 'Limit',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <React.Fragment>
            <Box sx={{ minWidth: 120 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    OrderType
                </InputLabel>
                <FormControl fullWidth>
                    <NativeSelect
                        defaultValue={values.orderType}
                        onChange={handleChange('orderType')}
                        inputProps={{
                            name: 'type',
                            id: 'buyOrderType',
                        }}
                    >
                        {GenerateTypes([{id:'Limit',symbol:'Limit'}, {id:'Market',symbol:'Market'}])}
                    </NativeSelect>
                </FormControl>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch', p: 1, mx: 'auto', }} variant="outlined">
                        <OutlinedInput
                            id="price"
                            value={values.price}
                            onChange={handleChange('price')}
                            endAdornment={<InputAdornment position="end">SGD</InputAdornment>}
                            aria-describedby="outlined-price-helper-text"
                            inputProps={{
                                'aria-label': 'price',
                            }}
                            disabled={values.orderType == 'Limit'? false : true}
                        />
                    </FormControl>
                </div>
            </Box>
        </React.Fragment>
    );
}

export default class BuyOrderTypeAndPrice extends React.Component {
    constructor() {
        super();
    }

    /*
    static contextTypes = {
        types: PropTypes.array,
    };
    */

    render() {
        return <BuyOrderTypeAndPriceContent />;
    }
}