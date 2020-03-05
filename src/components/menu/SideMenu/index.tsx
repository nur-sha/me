import React, { useState } from 'react';
import {
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MAIN_ROUTES } from '../../../routes/main';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: ThemeOptions) =>
  createStyles({
    drawer: {
      minWidth: '300px',
    },
  }),
);

const SideMenu = ({ open, onClose, ...props }: DrawerProps) => {
  const classes = useStyles();
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor='right'
      classes={{ paper: classes.drawer }}
      SlideProps={{
        direction: 'right',
      }}
      {...props}
    >
      <List>
        <ListItem button component={Link} to={MAIN_ROUTES.ABOUT}>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem button component={Link} to={MAIN_ROUTES.ABOUT}>
          <ListItemText primary='Resume' />
        </ListItem>
        <ListItem button component={Link} to={MAIN_ROUTES.ABOUT}>
          <ListItemText primary='Skills' />
        </ListItem>
        <ListItem button component={Link} to={MAIN_ROUTES.ABOUT}>
          <ListItemText primary='Project' />
        </ListItem>
        <ListItem button component={Link} to={MAIN_ROUTES.ABOUT}>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
