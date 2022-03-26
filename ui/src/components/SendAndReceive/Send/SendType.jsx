import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function NativeSelectContent(props) {
  return (
    <React.Fragment>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Pay with
        </InputLabel>
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <NativeSelect
                defaultValue={10}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
                >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
                </NativeSelect>
            </FormControl>
        </Box>
    </React.Fragment>
  );
}

export default class SendType extends React.Component {
    constructor() {
        super();
    }

    render() {
      return <NativeSelectContent />;
    }
}