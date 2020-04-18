import React, { useContext } from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import HorizontalMenu from '../menu/horizontalMenu';
import SwitchWithLabel from '../switch/SwitchWithLabel';
import { ThemeContext } from '../../context/themeContext';

const useStyles = makeStyles(() =>
  createStyles({
    switch: {
      marginLeft: '0px',
    },
  }),
);

const MainBar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
        >
          <SwitchWithLabel
            className={classes.switch}
            onChange={toggleMode}
            label={`${mode} mode`}
            checked={mode === 'dark'}
          />
        </Grid>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Grid
          container
          direction='row'
          justify='flex-end'
          alignItems='center'
          style={{ overflowX: 'hidden' }}
        >
          <HorizontalMenu />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainBar;
