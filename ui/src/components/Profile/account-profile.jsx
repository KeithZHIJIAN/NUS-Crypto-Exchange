import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';
import PropTypes from 'prop-types';

const user = {
    photoURL: '/static/mock-images/avatars/avatar_default.jpg',
    city: 'GuangZhou',
    country: 'China',
    jobTitle: 'TBC',
    displayName: 'Katarina Smith',
    timezone: 'GTM-8'
};

function AccountProfileContent(props) {
    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={props.currentUser.photoURL != undefined? props.currentUser.photoURL : user.photoURL}
                        sx={{
                            height: 64,
                            mb: 2,
                            width: 64
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {props.currentUser.displayName != undefined? props.currentUser.displayName : user.displayName}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {props.currentUser.city != undefined && props.currentUser.country != undefined? `${props.currentUser.city} ${props.currentUser.country}` : `${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {props.currentUser.timezone != undefined? props.currentUser.timezone : user.timezone}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                    disabled
                >
                    Upload picture
                </Button>
            </CardActions>
        </Card>
)};

export class AccountProfile extends React.Component {
    static contextTypes = {
        currentUser: PropTypes.object,
    };

    render() {
        return (
            <AccountProfileContent currentUser={this.context.currentUser} />
        );
    }
}