import React from 'react';
import { makeStyles, createStyles, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    listItemIcon: {
      minWidth: 'auto',
    },
    listItemText: {
      margin: 0,
      fontSize: theme.typography.body1.fontSize,
    },
  }),
);

export interface BasicInfoData {
  age: string;
  experience: number;
  residence: string;
}

export interface BasicInfoProps {
  content: BasicInfoData;
}

const BasicInfo = ({
  content: { age, experience, residence },
}: BasicInfoProps) => {
  const classes = useStyles();
  return (
    <>
      <ListItemText
        primary={`Age: ${age} years old`}
        className={classes.listItemText}
      />
      <ListItemText
        primary={`Experience: ${experience} years`}
        className={classes.listItemText}
      />
      <ListItemText
        primary={`Residence: ${residence}`}
        className={classes.listItemText}
      />
    </>
  );
};

export default BasicInfo;
