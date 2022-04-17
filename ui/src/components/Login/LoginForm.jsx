import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../Iconify';


// ----------------------------------------------------------------------

function LoginFormContent(props) {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const result = await props.login(email, password);
      if (result == true) {
        setFieldValue("email", '');
        setFieldValue("password", '');
        setTimeout(() => {props.webHistory.replace('/'); }, 100); //wait for sometime
      } else {
        setFieldValue("email", '');
        setFieldValue("password", '');
        setTimeout(() => {props.webHistory.replace('/login'); }, 100); //wait for sometime
      };

    }
  });

  useEffect(() => {
    return () => {
      setFieldValue("email", '');
      setFieldValue("password", '');
    };
  }, []);

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            id='email'
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            id='password'
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>

        </Stack>
      </Form>
    </FormikProvider>
  );
}

export default class LoginForm extends React.Component {
  static contextTypes = {
    login: PropTypes.func,
    webHistory: PropTypes.object,
  };

  render() {
    return (
      <LoginFormContent login={this.context.login} webHistory={this.context.webHistory} />
    );
  }
}