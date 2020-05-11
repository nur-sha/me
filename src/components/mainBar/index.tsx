import React, { useContext, useEffect, useState } from 'react';
import {
  Grid,
  makeStyles,
  createStyles,
  Slide,
  Theme,
} from '@material-ui/core';
import HorizontalMenu from '../menu/horizontalMenu';
import SwitchWithLabel from '../switch/SwitchWithLabel';
import { ThemeContext } from '../../context/themeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    switch: {
      marginLeft: '0px',
    },

    fixedBar: {
      position: 'fixed',
      zIndex: 1200,
      top: 0,
      background: theme.palette.background.default,
      left: 0,
      padding: '24px',
    },
  }),
);

const MainBar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const classes = useStyles();
  const [slidein, setIn] = useState(true);
  const [currentPosition, setPosition] = useState(0);

  useEffect(() => {
    const toggleMenu = () => {
      setPosition((oldPosition) => {
        const current = window.pageYOffset;
        if (oldPosition > current + 10 || current < 40) {
          setIn(true);
        } else if (oldPosition < current) {
          setIn(false);
        }
        return window.pageYOffset;
      });
    };
    window.addEventListener('scroll', toggleMenu);
  }, []);

  return (
    <Slide in={slidein} direction='down'>
      <Grid container className={classes.fixedBar}>
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
    </Slide>
  );
};

export default MainBar;
