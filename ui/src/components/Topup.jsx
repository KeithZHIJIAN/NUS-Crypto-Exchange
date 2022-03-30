import * as React from 'react';
import Title from './Title';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';


function TopupContent(props) {
  const [values, setValues] = React.useState({
    amount: 0,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <React.Fragment>
      <Title>Topup</Title>
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
      <Grid item xs>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <FormControl sx={{ m: 1, width: '25ch', p: 1, mx: 'auto', }} variant="outlined">
                <OutlinedInput
                  id="topup"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  endAdornment={<InputAdornment position="end">SGD</InputAdornment>}
                  aria-describedby="outlined-amount-helper-text"
                  inputProps={{
                  'aria-label': 'amount',
                  }}
                />
              </FormControl>
            </div>
        </Box>
      </Grid>
      <Grid item xs>
        <Button variant="contained" onClick={async ()=>{await props.topup();}}>Topup</Button>
      </Grid>
      </Grid>

    </React.Fragment>
  );
}

export default class Topup extends React.Component {
  static contextTypes = {
    topup: PropTypes.func,
  };

  render() {
    return (
      <React.Fragment>
        <TopupContent topup={this.context.topup}/>
      </React.Fragment>
    )
  }
}