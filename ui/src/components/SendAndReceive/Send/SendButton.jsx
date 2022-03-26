import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default class SendButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={()=>{this.props.update();}}>Send</Button>
            </Stack>
        );
    }
}