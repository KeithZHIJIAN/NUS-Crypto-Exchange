import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import PropTypes from 'prop-types';

export default class Notifications extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
        changePage: PropTypes.func  //接收传递的方法
    };

    render() {
        return (
            <ListItemButton onClick={() => {this.context.changePage('Notifications')}}>
            <ListItemIcon>
                <DonutSmallIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
            </ListItemButton>
        );
    }
}