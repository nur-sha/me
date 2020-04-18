import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MAIN_ROUTES } from './main';
import Landing from '../pages/landing/landing';
import Components from '../pages/components';
import MainBar from '../components/mainBar';
import About from '../pages/about';
import { useTransition, animated } from 'react-spring';
import { __RouterContext } from 'react-router';
import Projects from '../pages/projects';
import Experience from '../pages/experience';
import Education from '../pages/education';
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appWrapper: {
      width: '98vw',
      overflowX: 'hidden',
      padding: '48px',
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
        padding: '24px',
      },
    },
  }),
);

const Routes = () => {
  const { location } = useContext(__RouterContext);
  const classes = useStyles();
  const theme = useTheme();
  const smallPhone = useMediaQuery(theme.breakpoints.down('sm'));

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateY(-100px)',
    },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(100px)' },
  });

  return (
    <div className={classes.appWrapper}>
      <MainBar />
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            ...props,
            width: smallPhone ? 'calc(100vw - 48px)' : 'calc(100% - 96px)',
            marginTop: smallPhone ? '2.5rem' : '3.75rem',
          }}
        >
          <Switch location={item}>
            <Route exact path={MAIN_ROUTES.HOME} component={Landing} />
            <Route path={MAIN_ROUTES.COMPONENTS} component={Components} />
            <Route path={MAIN_ROUTES.ABOUT} component={About} />
            <Route path={MAIN_ROUTES.PROJECTS} component={Projects} />
            <Route path={MAIN_ROUTES.EXPERIENCE} component={Experience} />
            <Route path={MAIN_ROUTES.EDUCATION} component={Education} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
};

export default Routes;
