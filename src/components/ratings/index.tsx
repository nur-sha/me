import React from 'react';
import {
  ListItem,
  ListItemIcon,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const maxScale = 10;

export interface RatingsProps {
  activeNumber: number;
  className?: string;
  maxRating?: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      width: 'auto',
      paddingLeft: 0,
      paddingTop: '0.75rem',
      paddingBottom: '1.5rem',
    },
    listItemIcon: {
      minWidth: 'auto',
    },
  }),
);

const Ratings = ({
  activeNumber,
  className,
  maxRating = maxScale,
}: RatingsProps) => {
  const classes = useStyles();
  return (
    <>
      {Array.apply(0, Array(maxScale)).map((e, index) => (
        <ListItem
          key={index}
          className={`${classes.listItem} ${className}`}
          {...(index > activeNumber && { disabled: true })}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <FiberManualRecordIcon />
          </ListItemIcon>
        </ListItem>
      ))}
    </>
  );
};

export default Ratings;
