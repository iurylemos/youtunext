import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  AccountCircle,
  History,
  Home,
  Subscriptions,
  VideoLibrary,
  Whatshot,
} from '@material-ui/icons';
import { signIn, useSession } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
  mobileContent: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Inicio', path: '/', icon: Home },
  { id: 2, label: 'Em alta', path: '/tredding', icon: Whatshot },
  { id: 3, label: 'Inscrições', path: '/subscriptions', icon: Subscriptions },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History },
];

function NavBar() {
  const classes = useStyles();
  const router = useRouter();
  const [session] = useSession();
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Canal1' },
    { id: 2, name: 'Canal2' },
    { id: 3, name: 'Canal3' },
    { id: 4, name: 'Canal4' },
    { id: 5, name: 'Canal5' },
    { id: 6, name: 'Canal6' },
    { id: 7, name: 'Canal7' },
    { id: 8, name: 'Canal8' },
  ]);

  // eslint-disable-next-line no-unused-vars
  const subscribe = (item) => setSubscriptions([...subscriptions, item]);

  const isSelected = (item) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      {!session ? (
        <Box
          md={4}
          my={2}
          style={{ position: 'relative', textAlign: 'center' }}
        >
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer login
            </Button>
          </Box>
        </Box>
      ) : (
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              INSCRIÇÕES{' '}
            </ListSubheader>
          }
        >
          {subscriptions.map((item) => {
            return (
              <ListItem
                key={item.id}
                button
                classes={{ root: classes.listItem }}
                selected={isSelected(item)}
              >
                <ListItemIcon>
                  <Avatar className={classes.avatar}>H</Avatar>
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={item.name}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );

  return (
    <Hidden>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
