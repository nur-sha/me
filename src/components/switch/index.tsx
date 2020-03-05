import React, { useState } from 'react';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => ({
  sizeSmall: {
    height: '28px',
  },
  root: {
    height: '37px',
    width: '52px',
    boxSizing: 'border-box' as 'border-box',
  },
  switchBase: {
    padding: '4px',
    top: '11px',
    left: '11px',
    '&$checked': {
      transform: 'translateX(15px)',
      '& $thumb': {
        backgroundColor: theme.palette.common.black,
      },
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.common.white,
      },
    },
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.black,
  },
  thumb: {
    width: '7px',
    height: '7px',
    boxShadow: 'none',
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
});

interface BasicSwitchProps extends SwitchProps {
  onChange: (
    event?: React.ChangeEvent<HTMLInputElement>,
    checked?: boolean,
  ) => void;
}

const BasicSwitch = (props: BasicSwitchProps) => {
  const [checked, setIsChecked] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    check: boolean,
  ) => {
    setIsChecked(check);
    if (props.onChange) {
      props.onChange();
    }
  };

  return (
    <Switch
      value='switch'
      checked={checked}
      disableRipple={true}
      // color='primary'
      {...props}
      onChange={handleChange}
    />
  );
};

export default withStyles(styles)(BasicSwitch);
