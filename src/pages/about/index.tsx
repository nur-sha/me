import React, { ReactNode, ReactElement, ElementType } from 'react';
import Grid from '@material-ui/core/Grid';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {
  makeStyles,
  createStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import PotraitSection from './sections/potraitSection';
import data from './data';
import BasicInfo from './sections/basinInfo';
import SectionWrapper from './sections/sectionWrapper';
import Interest from './sections/interest';
import Language from './sections/language';

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
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PotraitSection content={data.potraitSection} />
      </Grid>
      <Grid item xs={12} md={5}>
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
