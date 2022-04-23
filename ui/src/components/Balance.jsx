import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import PropTypes from 'prop-types';

let myDate = new Date();//获取系统当前时间

function timeConvert(index) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months.at(index);
}

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
        {`on ${myDate.getDate()} ${timeConvert(myDate.getMonth())}, ${myDate.getFullYear()}`}
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
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