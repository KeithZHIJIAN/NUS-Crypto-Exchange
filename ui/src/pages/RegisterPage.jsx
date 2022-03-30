import { Link as RouterLink } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../components/AuthLayout';
// components
import Page from '../components/Page';
import RegisterForm from '../components/Register/RegisterForm';
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

function Register(props) {
  return (
    <HelmetProvider>
      <RootStyle>
        <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 5 }}>
            Have fun in NUSSwap
          </Typography>
          <img alt="register" src="/img/background.jpg" />
        </SectionStyle>

        <Container sx={{m: -10}}>

          <ContentStyle>
            <Box sx={{ mb: 5, mt: -15 }}>
              <AuthLayout>
                Already have an account? &nbsp;
                <Link underline="none" variant="subtitle2" href="/#/login">
                  Login
                </Link>
              </AuthLayout>
              <Typography variant="h4" gutterBottom>
                Get started absolutely free.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Free forever. No credit card needed.
              </Typography>
            </Box>

            <AuthSocial id='register' login={props.login} register={props.register} />

            <RegisterForm />

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              By registering, I agree to Minimal&nbsp;
              <Link underline="always" color="textPrimary">
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link underline="always" color="textPrimary">
                Privacy Policy
              </Link>
              .
            </Typography>

            <Typography
              variant="body2"
              align="center"
              sx={{
                mt: 3,
                display: { sm: 'none' }
              }}
            >
              Already have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="login" underline="hover">
                Login
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </HelmetProvider>
  );
}

export default class RegisterPage extends React.Component {
  static contextTypes = {
    login: PropTypes.func,
    register: PropTypes.func,
    /* webHistory: PropTypes.object, */
  };

  render() {
    return (
      <Register login={this.context.login} register={this.context.register} /* webHistory={this.context.webHistory} *//>
    );
  }
}