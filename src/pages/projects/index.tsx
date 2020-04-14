import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Paper,
  Typography,
  Dialog,
  Grow,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

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
    portal: {},
  }),
);

const items = [
  {
    id: 0,
    name: 'Entry System',
    company: 'Cadmus Technologies P/L',
    year: '2012',
    description: '',
    techStack: '',
  },
  {
    id: 1,
    name: 'Kampung Glam Cafe',
    company: 'Cadmus Technologies P/L',
    year: '2012',
    description: '',
    techStack: '',
  },
  {
    id: 2,
    name: 'Orphans United P/L 1',
    company: 'Cadmus Technologies P/L',
    year: '2012',
    description: '',
    techStack: '',
  },
  {
    id: 3,
    name: 'Orphans United P/L 2',
    company: 'Cadmus Technologies P/L',
    year: '2012',
    description: '',
    techStack: '',
  },
  {
    id: 4,
    name: 'Orphans United P/L 3',
    company: 'Cadmus Technologies P/L',
    year: '2012',
    description: '',
    techStack: '',
  },
  {
    id: 5,
    name: 'Orphans United P/L 4',
    company: 'Cadmus Technologies P/L',
    year: '2012',
    description: '',
    techStack: '',
  },
];

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
  <Grow {...props} />
));

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [id, setName] = useState();

  const handleOpen = (e: React.MouseEvent<HTMLElement>, id: string) => {
    setOpen(true);
    setName(id);
  };

  const handleClose = () => {
    setOpen(false);
    setName(null);
  };

  return (
    <>
      <Typography variant='h1' align='center'>
        Projects
      </Typography>
      <div className={classes.wrapper}>
        {items.map(item => {
          return (
            <Paper
              key={item.name}
              variant='outlined'
              elevation={1}
              onClick={event => handleOpen(event, item.name)}
            >
              <Typography variant='h4'>{item.name}</Typography>
              <Typography variant='body1'>{item.company}</Typography>
              <Typography variant='caption'>{item.year}</Typography>
            </Paper>
          );
        })}
      </div>
      <Dialog
        fullScreen={true}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div>
          <div onClick={handleClose}>Close</div>
          <div>Content of project goes here</div>
        </div>
        <div>this is a modal dialog</div>
      </Dialog>
    </>
  );
};

export default Projects;
