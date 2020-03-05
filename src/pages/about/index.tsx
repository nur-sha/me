import React from 'react';
import Grid from '@material-ui/core/Grid';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import potrait from '../../assets/images/about.jpeg';
import {
  makeStyles,
  createStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    imagePotrait: {
      width: '100%',
    },
    section: {},
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
    },
    listItem: {
      width: 'auto',
      paddingLeft: 0,
      paddingTop: '6px',
    },
    listItemIcon: {
      minWidth: 'auto',
    },
  }),
);

const About = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <img className={classes.imagePotrait} src={potrait} alt='Nurshahadah' />
        <span className='title'>Nurshahadah</span>
        <span className='designation'>UX Engineer</span>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant='h2'>Education</Typography>
        <Typography>
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. “
        </Typography>
        <div className={classes.section}>
          Age: 30 <br />
          Experience: 5 yeaers <br />
          Residence: Singaporean <br />
        </div>
        <div className={classes.section}>
          <Typography variant='h3'>Interest</Typography>
          <List>
            <ListItem disableGutters>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary='Day dreaming' />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary='Eating' />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary='Sleeping' />
            </ListItem>
          </List>
        </div>
        <div>
          <Typography variant='h3'>Languages</Typography>
          <Typography variant='subtitle1'>Interest</Typography>
          <List className={classes.flexContainer}>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <FiberManualRecordIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <FiberManualRecordIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <FiberManualRecordIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem} disabled>
              <ListItemIcon className={classes.listItemIcon}>
                <FiberManualRecordIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
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
