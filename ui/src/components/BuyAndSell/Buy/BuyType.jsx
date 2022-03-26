import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import PropTypes from 'prop-types';
import GenerateTypes from '../../GenerateTypes';

function NativeSelectContent(props) {
  return (
    <React.Fragment>
        <Box sx={{ minWidth: 120 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Buy
            </InputLabel>
            <FormControl fullWidth>
                <NativeSelect
                defaultValue={0}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
                >
                {GenerateTypes(props.types)}
                </NativeSelect>
            </FormControl>
        </Box>
    </React.Fragment>
  );
}

export default class BuyType extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
        types: PropTypes.array,
    };

    render() {
      return <NativeSelectContent types={this.context.types}/>;
    }
}