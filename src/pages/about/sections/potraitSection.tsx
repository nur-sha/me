import React from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    imagePotrait: {
      width: '65%',
      paddingBottom: '1rem',
    },
    potraitWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& .MuiTypography-h4': {
        paddingBottom: '0.5rem',
      },
    },
  }),
);

export interface PotraitSectionData {
  name: string;
  designation: string;
  image: string;
}

export interface PotraitSectionProps {
  content: PotraitSectionData;
  className?: string;
}

const PotraitSection = ({
  className,
  content: { name, designation, image },
}: PotraitSectionProps) => {
  const classes = useStyles();
  return (
    <div className={`${classes.potraitWrapper} ${className}`}>
      <img className={classes.imagePotrait} src={image} alt={name} />
      <Typography variant='h4' display='block'>
        {name}
      </Typography>
      <Typography variant='h5' display='block'>
        {designation}
      </Typography>
    </div>
  );
};

export default PotraitSection;
