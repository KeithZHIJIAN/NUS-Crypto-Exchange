import { Link as RouterLink, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../components/AuthLayout';
// components
import Page from '../components/Page';
import LoginForm from '../components/Login/LoginForm';
import AuthSocial from '../components/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

function Login(props) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RootStyle title="Login | Coinbase">
          <AuthLayout>
            Don't have an account? &nbsp;
            {/* <Link underline="none" variant="subtitle2" component={RouterLink} to="/register"> */}
            <Link underline="none" variant="subtitle2" onClick={() => {props.changePage('Register');}}>
              Get started
            </Link>
          </AuthLayout>

          {/* <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
          </SectionStyle> */}
          
          <Container maxWidth="sm">
            <ContentStyle>
              <Stack sx={{ mb: 5 }}>
                <Typography variant="h4" gutterBottom>
                  Sign in to Minimal
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
              </Stack>

              <AuthSocial />

              <LoginForm />

              <Typography
                variant="body2"
                align="center"
                sx={{
                  mt: 3,
                  display: { sm: 'none' }
                }}
              >
                Don't have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="register" underline="hover">
                  Get started
                </Link>
              </Typography>
            </ContentStyle>
          </Container>
        </RootStyle>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default class LoginPage extends React.Component {
  static contextTypes = {
    changePage: PropTypes.func  //接收传递的方法
  };

  render() {
    return (
      <Login changePage={this.context.changePage} />
    );
  }
}