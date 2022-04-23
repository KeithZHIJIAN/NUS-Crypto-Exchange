import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import PropTypes from 'prop-types';


const user = {
    photoURL: '/static/mock-images/avatars/avatar_default.jpg',
    country: 'China',
    displayName: 'Katarina Smith',
    timezone: 'GTM-8',
    email: 'test@test.com',
    phone: 'test',
    currentCity: 'GuangZhou',
    cities: [
        {
            value: 'Foshan',
            label: 'Foshan'
        },
        {
            value: 'HK',
            label: 'HK'
        },
        {
            value: 'Beijing',
            label: 'Beijing'
        }
    ],
};


function AccountProfileDetailsContent(props) {

    const [values, setValues] = React.useState({
        firstName: props.currentUser.displayName != undefined? props.currentUser.displayName.split(" ").at(0) : user.displayName.split(" ").at(0),
        lastName: props.currentUser.displayName != undefined? props.currentUser.displayName.split(" ").at(1) : user.displayName.split(" ").at(1),
        email: props.currentUser.email != undefined? props.currentUser.email : user.email,
        phone: props.currentUser.phone != undefined? props.currentUser.phone : user.phone,
        country: props.currentUser.country != undefined? props.currentUser.country : user.country,
        currentCity: props.currentUser.currentCity != undefined? props.currentUser.currentCity : user.currentCity,
        cities: props.currentUser.cities != undefined? props.currentUser.cities : user.cities,
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate
        >
            <Card>
                <CardHeader
                    subheader="The information can be edited"
                    title="ProfilePage"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value={values.firstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value={values.lastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                disabled
                                fullWidth
                                label="Email Address"
                                name="email"
                                //onChange={handleChange}
                                required
                                defaultValue={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                disabled
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                //onChange={handleChange}
                                //type="number"
                                defaultValue={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                disabled
                                fullWidth
                                label="Country"
                                name="country"
                                //onChange={handleChange}
                                required
                                defaultValue={values.country}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                disabled
                                fullWidth
                                label="Select City"
                                name="City"
                                //onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                defaultValue={values.currentCity}
                                variant="outlined"
                            >
                                {values.cities.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                                {/*
                                    {values.cities.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                */}
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={async () => await props.updateProfile(values.firstName, values.lastName)}
                    >
                        Save details
                    </Button>
                </Box>
            </Card>
        </form>
    );
};


export class AccountProfileDetails extends React.Component {
    static contextTypes = {
        currentUser: PropTypes.object,
        updateProfile: PropTypes.func,
    };

    render() {
        return (
            <AccountProfileDetailsContent currentUser={this.context.currentUser} updateProfile={this.context.updateProfile}/>
        );
    }
}