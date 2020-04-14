import React, { ElementType } from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  section: {
    paddingTop: '3rem',
  },
};

export interface SectionWrapperProps extends WithStyles<typeof styles> {
  component: ElementType;
  title?: string;
  className?: string;
}

const SectionWrapper = ({
  component,
  className,
  classes,
  title,
}: SectionWrapperProps) => {
  const Component = component;
  return (
    <div className={`${classes.section} ${className}`}>
      {title && <Typography variant='h4'>{title}</Typography>}
      <Component />
    </div>
  );
};

export default withStyles(styles)(SectionWrapper);
