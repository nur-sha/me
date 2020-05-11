import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Ratings from '../../../components/ratings';

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    padding: 0,
  },
  listItem: {
    width: 'auto',
    paddingLeft: 0,
    paddingTop: '0.75rem',
    paddingBottom: '1.5rem',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
};

export interface LanguageData {
  name: string;
  proficiency: number;
}

export interface LanguagesProps extends WithStyles<typeof styles> {
  content: LanguageData[];
  className?: string;
}

export const maxScale = 10;

const Languages = ({ classes, className, content }: LanguagesProps) => {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        Languages
      </Typography>
      {content.map(({ name, proficiency }, index) => {
        return (
          <div key={name}>
            <Typography>{name}</Typography>
            <Ratings activeNumber={proficiency} />
          </div>
        );
      })}
    </>
  );
};

export default withStyles(styles)(Languages);
