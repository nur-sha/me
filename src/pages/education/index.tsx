import React from 'react';
import Timeline from '../layout/timeline';
import data from './data';
import { Typography, withStyles, WithStyles } from '@material-ui/core';
import BasicList from '../../components/list/basicList';

const style = {
  listItem: {
    paddingRight: '1.5rem',
    '& .MuiListItemIcon-root': {
      paddingRight: '0.75rem',
    },
  },
};

interface Props extends WithStyles<typeof style> {}

const Education = ({ classes }: Props) => {
  return (
    <Timeline
      pageTitle='Education'
      potraitSection={data.potraitSection}
      data={data.list}
    >
      <Typography variant='h4'>Certificates</Typography>
      <BasicList className={classes.listItem} list={data.certificates} />
    </Timeline>
  );
};

export default withStyles(style)(Education);
