import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import Iconify from '../Iconify';
import MenuPopover from './MenuPopover';
//
import PropTypes from 'prop-types';

/* import account from '../../_mocks_/account'; */

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
    page: 'Assets',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '/',
    page: 'Profile',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '/',
    page: 'Setting',
  }
];

// ----------------------------------------------------------------------

function AccountPopover(props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logout = async () => {
    await props.logout();
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={props.account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {props.account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {props.account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={(event) => { handleClose(); props.changePage(option.page);}}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Iconify
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          {props.account.email.indexOf('Google') > 0 ? 
          (<GoogleLogout
            clientId="610278992963-sjmc5hsd6vvui5f3a1fl2dtvfmtsm799.apps.googleusercontent.com"
            render={renderProps => (
              <Button fullWidth color="inherit" variant="outlined" onClick={renderProps.onClick} >
                Logout
              </Button>
            )}
            /* buttonText="Logout" */
            onLogoutSuccess={logout}/>)
          :
          (<Button fullWidth color="inherit" variant="outlined" onClick={() => {props.logout()}}>
            Logout
          </Button>)}
        </Box>
      </MenuPopover>
    </>
  );
}

export default class PersonalInfo extends React.Component {
    constructor() {
        super();
    }

    static contextTypes = {
      changePage: PropTypes.func,  //接收传递的方法
      currentUser: PropTypes.object,
      logout: PropTypes.func,
    };

    render() {
        return (
            <React.Fragment>
                <AccountPopover changePage={this.context.changePage} account={this.context.currentUser} logout={this.context.logout}/>
            </React.Fragment>
        )
    }
}