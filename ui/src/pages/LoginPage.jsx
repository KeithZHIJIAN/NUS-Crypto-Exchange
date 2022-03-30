import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Card, Box, Link, Container, Typography } from '@mui/material';
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
  top: 0,
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
      <RootStyle>
        <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="/img/background.jpg" alt="login" />
        </SectionStyle>
          
        <Container sx={{m: -10}}>

          <ContentStyle>
            <Box sx={{ mb: 5, mt: -15 }}>
              <AuthLayout>
                Don't have an account? &nbsp;
                <Link underline="none" variant="subtitle2" href="/#/register">
                  Get started
                </Link>
              </AuthLayout>
              <Typography variant="h4" gutterBottom>
                Sign in to NUSSwap
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
            </Box>

            <AuthSocial id='login' login={props.login} register={props.register} />

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
              <Link variant="subtitle2" underline="hover">
                Get started
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </HelmetProvider>
  );
}

export default class LoginPage extends React.Component {
  static contextTypes = {
    login: PropTypes.func,
    register: PropTypes.func,
    /* webHistory: PropTypes.object, */
  };

  render() {
    return (
      <Login login={this.context.login} register={this.context.register} /* webHistory={this.context.webHistory} *//>
    );
  }
}