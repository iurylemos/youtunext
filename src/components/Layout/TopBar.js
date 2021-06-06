import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Hidden,
  Avatar,
} from '@material-ui/core';
import {
  Search,
  Menu,
  VideoCall,
  Apps,
  Notifications,
  AccountCircle,
  Brightness7,
  Brightness4,
} from '@material-ui/icons';
import { signIn, signOut, useSession } from 'next-auth/client';
import useSettings from '@src/hooks/useSettings';
import THEMES from '@src/utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoDark: {
    cursor: 'pointer',
    height: 20,
    marginLeft: theme.spacing(2),
    filter: 'brightness(6) sepia(0) hue-rotate(180deg) saturate(5)',
  },
  logoLight: {
    cursor: 'pointer',
    height: 20,
    marginLeft: theme.spacing(2),
  },
  inputSearch: {
    margin: theme.spacing(1),
    minWidth: '30vw',
  },
  avatar: {
    cursor: 'pointer',
  },
}));

function TopBar() {
  const classes = useStyles();
  const [session] = useSession();
  const { settings, saveSettings } = useSettings();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box alignItems="center">
          <Menu />
          <img
            src="/logo-youtube.svg"
            alt="logo"
            className={
              settings.theme === THEMES.DARK
                ? classes.logoDark
                : classes.logoLight
            }
          />
        </Box>
        <Hidden mdDown>
          <Box alignItems="center">
            <TextField
              className={classes.inputSearch}
              size="small"
              id="input-with-icon-textfield"
              variant="outlined"
              placeholder="Pesquisar"
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Hidden>
        <Box display="flex">
          <IconButton>
            {settings.theme === THEMES.DARK ? (
              <Brightness7
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          {!session ? (
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                onClick={() => signOut()}
                alt="User"
                className={classes.avatar}
                src={session?.user?.image}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
