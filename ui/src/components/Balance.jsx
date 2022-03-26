import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import PropTypes from 'prop-types';

function preventDefault(event) {
  event.preventDefault();
}

function BalanceContent(props) {
  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
        ${props.balance}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

export default class Balance extends React.Component {
  static contextTypes = {
    balance: PropTypes.number
  };

  render() {
    return (
      <React.Fragment>
        <BalanceContent balance={this.context.balance}/>
      </React.Fragment>
    )
  }
}