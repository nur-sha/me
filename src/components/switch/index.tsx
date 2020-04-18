import React, { useState } from 'react';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import { withStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => ({
  sizeSmall: {
    height: '28px',
  },
  root: {
    height: '20px',
    width: '40px',
    boxSizing: 'border-box' as 'border-box',
    padding: 0,
  },
  switchBase: {
    padding: '4px',
    top: '0px',
    left: '0px',
    '&$checked': {
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
    borderRadius: '12px',
    opacity: 1,
    backgroundColor: theme.palette.common.black,
  },
  thumb: {
    width: '12px',
    height: '12px',
    boxShadow: 'none',
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
});

export interface BasicSwitchProps extends SwitchProps {
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
      checked={checked}
      disableRipple={true}
      {...props}
      onChange={handleChange}
    />
  );
};

export default withStyles(styles)(BasicSwitch);
