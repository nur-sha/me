import React from 'react';
import {
  ListItem,
  ListItemIcon,
  makeStyles,
  createStyles,
  List,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const maxScale = 10;

export interface RatingsProps {
  activeNumber: number;
  className?: string;
  maxRating?: number;
  highlightActiveOnly?: boolean;
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
    flexContainer: {
      display: 'flex',
      flexDirection: 'row' as 'row',
      padding: 0,
    },
  }),
);

const Ratings = ({
  activeNumber,
  className,
  maxRating = maxScale,
  highlightActiveOnly = false,
}: RatingsProps) => {
  const classes = useStyles();
  return (
    <List className={classes.flexContainer}>
      {Array.apply(0, Array(maxRating)).map((e, index) => {
        const isDiabled = highlightActiveOnly
          ? index !== activeNumber
          : index > activeNumber;

        return (
          <ListItem
            disableGutters
            key={index}
            className={`${classes.listItem} ${className}`}
            {...(isDiabled && { disabled: isDiabled })}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <FiberManualRecordIcon fontSize='inherit' />
            </ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Ratings;
