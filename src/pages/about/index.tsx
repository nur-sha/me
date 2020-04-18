import React from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';
import BasicInfo from './sections/basinInfo';
import SectionWrapper from './sections/sectionWrapper';
import Interest from './sections/interest';
import Language from './sections/language';
import PotraitWithContent from '../layout/potraitWithContent';
import data from './data';

const useStyles = makeStyles(theme =>
  createStyles({
    pt2rem: {
      paddingTop: '2rem',
    },
  }),
);

const About = () => {
  const classes = useStyles();

  return (
    <PotraitWithContent potraitData={data.potraitSection}>
      <Typography variant='h2'>About</Typography>
      <Typography variant='h4'>
        “Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit. “
      </Typography>
      <SectionWrapper
        className={classes.pt2rem}
        component={() => <BasicInfo content={data.aboutSection.basicInfo} />}
      />
      <SectionWrapper
        component={() => <Interest content={data.aboutSection.interest} />}
      />
      <SectionWrapper
        component={() => <Language content={data.aboutSection.languages} />}
      />
      <Typography>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
      </Typography>
    </PotraitWithContent>
  );
};

export default About;
