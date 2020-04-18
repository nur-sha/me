import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export interface BulletsProps {
  className?: string;
  list: string[];
  iconFontSize?: 'small' | 'inherit' | 'default' | 'large';
}

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      // width: 'auto',
      // paddingLeft: 0,
      // paddingTop: '0.75rem',
      // paddingBottom: 0,
    },
    listItemText: {
      margin: 0,
      fontSize: theme.typography.body1.fontSize,
    },
  }),
);

const Bullets = ({
  className,
  list,
  iconFontSize = 'inherit',
}: BulletsProps) => {
  const classes = useStyles();
  return (
    <List disablePadding>
      {list.map(item => {
        return (
          <ListItem dense disableGutters key={item} className={className}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize={iconFontSize} />
            </ListItemIcon>
            <ListItemText primary={item} className={classes.listItemText} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Bullets;
