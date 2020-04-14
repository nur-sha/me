import React, { useContext } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MAIN_ROUTES } from './main';
import Landing from '../pages/landing/landing';
import Components from '../pages/components';
import MainBar, { MainBarProps } from '../components/mainBar';
import About from '../pages/about';
import { useTransition, animated } from 'react-spring';
import { __RouterContext } from 'react-router';
import styled from 'styled-components';
import Projects from '../pages/projects';
import Experience from '../pages/experience';

const AppWrapper = styled.div`
  width: 98vw;
  overflow-x: hidden;
  padding: 48px;
`;

const Routes = ({ onChange }: MainBarProps) => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: 'calc(100% - 96px)',
      opacity: 0,
      transform: 'translateY(-100px)',
    },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(100px)' },
  });

  return (
    <AppWrapper>
      <MainBar onChange={onChange} />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path={MAIN_ROUTES.HOME} component={Landing} />
            <Route path={MAIN_ROUTES.COMPONENTS} component={Components} />
            <Route path={MAIN_ROUTES.ABOUT} component={About} />
            <Route path={MAIN_ROUTES.PROJECTS} component={Projects} />
            <Route path={MAIN_ROUTES.EXPERIENCE} component={Experience} />
          </Switch>
        </animated.div>
      ))}
    </AppWrapper>
  );
};

export default Routes;
