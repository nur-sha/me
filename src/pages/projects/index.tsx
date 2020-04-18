import React from 'react';
import {
  makeStyles,
  createStyles,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';
import { summaryList } from './data';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > h1': {
        justifyContent: 'center',
      },
      '& > *': {
        padding: '32px',
        margin: theme.spacing(1),
        width: theme.spacing(36),
        height: theme.spacing(20),
      },
    },
    paper: {
      height: '100%',
      minHeight: '14.5rem',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
    },
    caption: {
      marginTop: 'auto',
    },
  }),
);

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h1' align='center'>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {summaryList.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                className={classes.paper}
                key={item.name}
                variant='outlined'
                elevation={1}
              >
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='body1'>{item.company}</Typography>
                <Typography variant='caption' className={classes.caption}>
                  {item.caption}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Projects;
