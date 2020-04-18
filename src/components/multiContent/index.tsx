import React from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    capitalise: {
      textTransform: 'uppercase',
    },
    paddingTop: {
      paddingTop: '1rem',
    },
    description: {
      paddingBottom: '3.5rem',
    },
    paddingBottom: {
      paddingBottom: '3.5rem',
    },
  }),
);

export interface MultiContentProps {
  color?: 'secondary' | 'primary' | 'inherit';
  title: string;
  subTitle: string;
  caption: string;
  description?: string;
}

const MultiContent = ({
  title,
  subTitle,
  caption,
  description,
  color = 'primary',
}: MultiContentProps) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        color={color}
        variant='h5'
        className={classes.capitalise}
        gutterBottom
      >
        {subTitle}
      </Typography>
      <Typography>{caption}</Typography>
      <Typography
        color={color}
        variant='h4'
        className={`${classes.paddingTop} ${!description &&
          classes.paddingBottom}`}
      >
        {title}
      </Typography>
      {description && (
        <Typography className={classes.description}>{description}</Typography>
      )}
    </div>
  );
};

export default MultiContent;
