import React from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';
import PotraitWithContent from '../layout/potraitWithContent';
import data from './data';
import potrait from '../../assets/images/about.jpeg';
import SectionWrapper from '../about/sections/sectionWrapper';
import Ratings from '../../components/ratings';

const useStyles = makeStyles((theme) =>
  createStyles({
    pt2rem: {
      paddingTop: '2rem',
    },
    pt0rem: {
      paddingTop: 0,
    },
    wrapper: {
      paddingTop: '1rem',
      '&:nth-child(2)': {
        paddingTop: 0,
      },
    },
  }),
);

export interface DataProps {
  name: string;
  level?: number;
}

export interface ComponentProps {
  data: DataProps[];
}

const Skills = () => {
  const classes = useStyles();

  const Component = ({ data }: ComponentProps) => {
    return (
      <>
        {data.map((list) => {
          return (
            <div key={list.name} className={classes.wrapper}>
              <Typography variant='body1'>{list.name}</Typography>
              {list.level && <Ratings activeNumber={list.level} />}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <PotraitWithContent potraitData={{ image: potrait }}>
      <Typography variant='h1'>Skills</Typography>
      {data.map((item, index) => {
        return (
          <SectionWrapper
            key={item.category}
            title={item.category}
            component={() => <Component data={item.list} />}
            {...(index === 0 && { className: classes.pt0rem })}
          />
        );
      })}

      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
      </Typography> */}
    </PotraitWithContent>
  );
};

export default Skills;
