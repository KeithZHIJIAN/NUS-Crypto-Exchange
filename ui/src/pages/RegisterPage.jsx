import { Link as RouterLink, BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <RootStyle title="Register | Coinbase">
          <AuthLayout>
            Already have an account? &nbsp;
            {/* <Link underline="none" variant="subtitle2" component={RouterLink} to="/login"> */}
            <Link underline="none" variant="subtitle2" onClick={() => {props.changePage('Login');}}>
              Login
            </Link>
          </AuthLayout>

          <Container sx={{m: -10}}>
            <ContentStyle>
              <Box sx={{ mb: 5, mt: 10 }}>
                <Typography variant="h4" gutterBottom>
                  Get started absolutely free.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Free forever. No credit card needed.
                </Typography>
              </Box>

              <AuthSocial />

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

              {/* <Typography
                variant="subtitle2"
                sx={{
                  mt: 3,
                  textAlign: 'center',
                  display: { sm: 'none' }
                }}
              > */}
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
                {/* <Link underline="hover" to="login" component={RouterLink}> */}
                  Login
                </Link>
              </Typography>
            </ContentStyle>
          </Container>
        </RootStyle>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default class RegisterPage extends React.Component {
  static contextTypes = {
    changePage: PropTypes.func,  //接收传递的方法
  };

  render() {
    return (
      <Register changePage={this.context.changePage} />
    );
  }
}