import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

function InputAdornmentsContent(props) {
  const [values, setValues] = React.useState({
    amount: 0,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
            <FormControl sx={{ m: 1, width: '25ch', p: 1, mx: 'auto', }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    endAdornment={<InputAdornment position="end">SGD</InputAdornment>}
                    aria-describedby="outlined-amount-helper-text"
                    inputProps={{
                    'aria-label': 'amount',
                    }}
                />
                <FormHelperText id="outlined-amount-helper-text">You can buy up to SGD {props.balance}</FormHelperText>
            </FormControl>
        </div>
    </Box>
  )
}

export default class BuyTextField extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
      balance: PropTypes.number,
    };

    render() {
      return <InputAdornmentsContent balance={this.context.balance}/>;
    }
}