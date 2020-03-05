import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import HorizontalMenu from '../menu/horizontalMenu';
import ThemeSwitcher from '../switch';
import { MAIN_ROUTES } from '../../routes/main';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export interface MainBarProps {
  onChange: () => void;
}

const MainBar = ({ onChange }: MainBarProps) => {
  const [displayFullMenu, setDisplay] = useState(
    window.location.hash === `#${MAIN_ROUTES.HOME}`,
  );
  const [close, setClose] = useState(false);

  const handleMenuClick = () => {
    setDisplay(true);
    setClose(true);
  };

  const handleClose = () => {
    setClose(false);
    setDisplay(false);
  };

  const onClick = (href: string) => {
    setDisplay(href === `#${MAIN_ROUTES.HOME}`);
  };

  console.log('close', close);
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
        >
          <ThemeSwitcher onChange={onChange} />
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
          <HorizontalMenu onClick={onClick} />
          {/* {displayFullMenu ? (
            <HorizontalMenu onClick={onClick} />
          ) : (
            <MenuIcon onClick={handleMenuClick} />
          )}
          {close && <CloseIcon onClick={handleClose} />} */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainBar;
