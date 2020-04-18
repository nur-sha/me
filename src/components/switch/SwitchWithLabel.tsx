import React from 'react';
import {
  FormControlLabel,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import BasicSwitch, { BasicSwitchProps } from './index';

export interface SwitchWithLabelProps extends BasicSwitchProps {
  className?: string;
  label: string;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    caption: {
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontFamily: 'PoppinsBold',
      paddingLeft: '1rem',
      color: theme.menu.color,
    },
  }),
);

const SwitchWithLabel = ({
  className,
  label,
  ...props
}: SwitchWithLabelProps) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={className}
      control={<BasicSwitch {...props} />}
      label={
        <Typography className={classes.caption} variant='caption'>
          {label}
        </Typography>
      }
    />
  );
};

export default SwitchWithLabel;
