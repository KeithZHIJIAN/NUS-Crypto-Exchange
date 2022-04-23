// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from './Iconify';
import { GoogleLogin } from 'react-google-login';

// ----------------------------------------------------------------------

export default function AuthSocial(props) {
  const loginsuccess = async (response) => {
    const {profileObj} = response;
    const email = profileObj.email+'(Google)';
    const password = 'Google';
    const photoURL = profileObj.imageUrl;
    await props.login(email, password, photoURL);
  }

  const registersuccess = async (response) => {
    const {profileObj} = response;
    const firstName = profileObj.givenName;
    const lastName = profileObj.familyName;
    const email = profileObj.email+'(Google)';
    const password = 'Google';
    const photoURL = profileObj.imageUrl;
    await props.register(firstName, lastName, email, password, photoURL);
  }

  const loginfailure = () => {
    console.log("Google Login Failure");
  }

  const registerfailure = () => {
    console.log("Google Register Failure");
  }

  return (
    <>
      <Stack direction="row" spacing={2}>
        <GoogleLogin
          clientId="610278992963-sjmc5hsd6vvui5f3a1fl2dtvfmtsm799.apps.googleusercontent.com"
          render={renderProps => (
            <Button fullWidth size="large" color="inherit" variant="outlined" onClick={renderProps.onClick} >
              <Iconify icon="eva:google-fill" color="#DF3E30" height={24} />
              {props.id}
            </Button>
          )}
          /* buttonText={props.id} */
          onSuccess={props.id == 'login'? loginsuccess : registersuccess}
          onFailure={props.id == 'login'? loginfailure : registerfailure}
          />
        {/* <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" height={24} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" height={24} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" height={24} />
        </Button> */}
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}