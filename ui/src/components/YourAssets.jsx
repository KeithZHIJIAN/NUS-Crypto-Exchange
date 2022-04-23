import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Box, Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';

function YourAssetsContent(props) {
  return (
    <React.Fragment>
      <Box sx={{ mt: 3 }}>
      <Card>
      <CardContent>
        <Title>Your assets</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell align="right">Description</TableCell>
              {/*<TableCell align="right">Price</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.assets.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                {/*<TableCell align="right">{`$${row.price}`}</TableCell>*/}
                <TableCell align="right">{`$${row.description}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link> */}
      </CardContent>
      </Card>
      </Box>
    </React.Fragment>
  );
}

export default class YourAssets extends React.Component {
  constructor() {
    super();
  }

  static contextTypes = {
    getAssets: PropTypes.func,  //接收传递的方法
  };

  render() {
    return (
      <React.Fragment>
        <YourAssetsContent assets={this.context.getAssets()}/>
      </React.Fragment>
    )
  }
}