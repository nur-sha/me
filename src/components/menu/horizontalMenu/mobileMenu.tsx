import React, { useState } from 'react';
import { MenuIcon } from './MenuIcon';
import {
  Dialog,
  Slide,
  Fade,
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  Typography,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { Link } from 'react-router-dom';

export interface MenuList {
  title: string;
  link: string;
}

export interface MenuListProps {
  menuList: MenuList[];
}

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
  <Fade {...props} timeout={500} />
));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      // color: theme.menu[theme.palette.type],
      fontWeight: 'bold',
      fontSize: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '48px 16px',
    },
    link: {
      marginTop: '32px',
      fontWeight: 'bold',
      paddingTop: 0,
      paddingRight: 0,
      width: 'auto',

      '& .MuiTypography-button': {
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
      },
    },
  }),
);

const MobileMenu = ({ menuList }: MenuListProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div onClick={handleClick}>
        <MenuIcon isOpened={showMenu} />
      </div>

      <Dialog
        fullScreen={true}
        open={showMenu}
        TransitionComponent={Transition}
        onClose={handleClick}
        PaperProps={
          {
            // className: classes.object,
          }
        }
      >
        <div className={classes.wrapper}>
          <MenuIcon onClick={handleClick} isOpened={showMenu} />
          {menuList.map((item) => {
            return (
              <ListItem
                className={classes.link}
                component={Link}
                to={item.link}
                disableGutters
                onClick={handleClick}
              >
                <Typography variant='button'>{item.title}</Typography>
              </ListItem>
            );
          })}
        </div>
      </Dialog>
    </>
  );
};

export default MobileMenu;
