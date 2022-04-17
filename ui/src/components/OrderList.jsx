import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Box, Card, CardContent, Button } from '@mui/material';
import PropTypes from 'prop-types';

function OrderListContent(props) {
  const num = props.num != -1? props.num : props.orders.length;
  const orders = props.orders.slice(0,num);

  return (
    <React.Fragment>
      <Box sx={{ mt: 3 }}>
      <Card>
      <CardContent>
        <Title>Order List</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{`$${row.price}`}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        { props.num != -1?
          <Button variant="outlined" size="medium" onClick={() => {props.changePage('Order')}} sx={{mt: 3}}>
            See more orders
          </Button>
            :
          <Button variant="outlined" size="medium" onClick={() => {props.changePage('Assets')}} sx={{mt: 3}}>
            Return homepage
          </Button>
        }
      </CardContent>
      </Card>
      </Box>
    </React.Fragment>
  );
}

export default class OrderList extends React.Component {
  constructor() {
    super();
  }

  static contextTypes = {
    getOrders: PropTypes.func,  //接收传递的方法
    changePage: PropTypes.func,
  };

  render() {
    return (
      <React.Fragment>
        <OrderListContent orders={this.context.getOrders()} num={this.props.num != undefined? this.props.num : -1} changePage={this.context.changePage} />
      </React.Fragment>
    )
  }
}