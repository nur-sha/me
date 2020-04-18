import React, { Fragment, useState, useEffect } from 'react';
import {
  Button,
  Theme,
  makeStyles,
  createStyles,
  Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MAIN_ROUTES } from '../../../routes/main';
import { useTrail, animated } from 'react-spring';
import { MenuIcon } from './MenuIcon';
import MobileMenu from './mobileMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    font: {
      color: theme.menu[theme.palette.type],
      fontWeight: 'bold',
      fontSize: 12,
    },
  }),
);

interface HorizontalMenuProps {
  onClick: (href: string) => void;
}
interface MenuItems {
  id: number;
  title: string;
  link: string;
  offsetWidth: number;
}
const menuItems: MenuItems[] = [
  {
    id: -1,
    title: 'Home',
    link: MAIN_ROUTES.HOME,
    offsetWidth: 26,
  },
  {
    id: 0,
    title: 'About',
    link: MAIN_ROUTES.ABOUT,
    offsetWidth: 26,
  },
  {
    id: 1,
    title: 'Education',
    link: MAIN_ROUTES.EDUCATION,
    offsetWidth: 16,
  },
  {
    id: 2,
    title: 'Experience',
    link: MAIN_ROUTES.EXPERIENCE,
    offsetWidth: 16,
  },
  {
    id: 3,
    title: 'Projects',
    link: MAIN_ROUTES.PROJECTS,
    offsetWidth: 36,
  },
  {
    id: 4,
    title: 'Skills',
    link: MAIN_ROUTES.ABOUT,
    offsetWidth: 42,
  },
  {
    id: 5,
    title: 'Contact',
    link: MAIN_ROUTES.ABOUT,
    offsetWidth: 30,
  },
];

const HorizontalMenu = () => {
  const classes = useStyles();
  const isHomePage = window.location.hash === `#${MAIN_ROUTES.HOME}`;
  const [toggle, set] = useState(isHomePage);

  const config = {
    mass: 5,
    tension: 2000,
    friction: 200,
  };

  useEffect(() => {
    set(isHomePage);
  }, [isHomePage]);

  const trail = useTrail(menuItems.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 10,
    width: toggle ? 90 : 0,
    from: {
      opacity: 0,
      x: 200,
      width: 0,
    },
  });

  const menuClick = () => {
    set(state => !state);
  };

  return (
    <Fragment>
      <Hidden mdDown>
        {trail.reverse().map(({ x, opacity, width, ...rest }, index) => {
          const items: MenuItems = menuItems[index];
          return (
            <animated.div
              key={items.id}
              className='trails-text'
              style={{
                ...rest,
                opacity,
                // @ts-ignore
                visibility: opacity.interpolate(o =>
                  o === 0 ? 'hidden' : 'visible',
                ),
                // @ts-ignore
                width: width.setValue(
                  !toggle ? 0 : 90 - menuItems[index].offsetWidth,
                ),
                display: 'inline-block',
                // @ts-ignore
                transform: x.interpolate(x => `translate3d(${x}px, 0px, 1px)`),
              }}
            >
              <animated.div
                style={{
                  // @ts-ignore
                  width: width.setValue(
                    !toggle ? 0 : 90 - menuItems[index].offsetWidth,
                  ),
                  display: 'inline-block',
                }}
              >
                <Button
                  key={items.id}
                  classes={{
                    root: classes.font,
                  }}
                  component={Link}
                  to={items.link}
                >
                  {items.title}
                </Button>
              </animated.div>
            </animated.div>
          );
        })}

        {!isHomePage && (
          <div onClick={menuClick}>
            <MenuIcon isOpened={toggle} />
          </div>
        )}
      </Hidden>
      <Hidden mdUp>
        <MobileMenu menuList={menuItems}></MobileMenu>
      </Hidden>
    </Fragment>
  );
};

export default HorizontalMenu;
