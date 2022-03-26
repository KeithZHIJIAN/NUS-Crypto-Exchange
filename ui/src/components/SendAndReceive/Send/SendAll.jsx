import * as React from 'react';
import Button from '@mui/material/Button';

function SendAllButton() {
    return (
        <div>
        <Button variant="outlined" size="small" onClick={() => {alert('SendAll')}} >
            SendAll
        </Button>
        </div>
    );
}

export default class SendAll extends React.Component {
    constructor() {
        super();
    }

    render() {
      return <SendAllButton />;
    }
}