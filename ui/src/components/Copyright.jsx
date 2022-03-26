import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CopyrightContent(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default class Copyright extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CopyrightContent />
      </React.Fragment>
    )
  }
}