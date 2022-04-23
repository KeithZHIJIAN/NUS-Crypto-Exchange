import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import PropTypes from 'prop-types';

function SettingsPasswordContent(props) {
    const [values, setValues] = useState({
        password: '',
        confirm: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        await props.updatePassword(values.password, values.confirm);
        setValues({
            ...values,
            password: '',
            confirm:''
        });
    };

    return (
        <form>
            <Card>
                <CardHeader
                    subheader="Update password"
                    title="Password"
                />
                <Divider />
                <CardContent>
                    <TextField
                        fullWidth
                        label="Password"
                        margin="normal"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Confirm password"
                        margin="normal"
                        name="confirm"
                        onChange={handleChange}
                        type="password"
                        value={values.confirm}
                        variant="outlined"
                    />
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
                        onClick={async () => await handleSubmit()}
                    >
                        Update
                    </Button>
                </Box>
            </Card>
        </form>
    );
};


export class SettingsPassword extends React.Component {
    static contextTypes = {
        currentUser: PropTypes.object,
        updatePassword: PropTypes.func,
    };

    render() {
        return (
            <SettingsPasswordContent currentUser={this.context.currentUser} updatePassword={this.context.updatePassword}/>
        );
    }
}