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
                {props.id}
            </InputLabel>
            <FormControl fullWidth>
                <NativeSelect
                defaultValue={0}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native-' + props.id,
                }}
                >
                {GenerateTypes(props.types)}
                </NativeSelect>
            </FormControl>
        </Box>
    </React.Fragment>
  );
}

export default class ConvertType extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
        wallet: PropTypes.array,
        types: PropTypes.array,
    };

    render() {
      return <NativeSelectContent id={this.props.id} types={this.props.id == 'from'? this.context.wallet : this.context.types}/>;
    }
}