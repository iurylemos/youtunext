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
} from '@material-ui/core';
import {
  Search,
  Menu,
  VideoCall,
  Apps,
  Notifications,
  AccountCircle,
} from '@material-ui/icons';

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
  logo: {
    cursor: 'pointer',
    height: 20,
    marginLeft: theme.spacing(2),
  },
  inputSearch: {
    margin: theme.spacing(1),
    minWidth: '30vw',
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box alignItems="center">
          <Menu />
          <img src="/logo-youtube.svg" alt="logo" className={classes.logo} />
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
            <Apps />
          </IconButton>
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
