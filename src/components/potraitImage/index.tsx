import React from 'react';
import { makeStyles, createStyles, Typography, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imagePotrait: {
      width: '65%',
      paddingBottom: '1rem',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    potraitWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '-24px',
        marginRight: '-24px',
      },

      '& .MuiTypography-h4': {
        paddingBottom: '0.5rem',
      },
    },
  }),
);

export interface PotraitImageData {
  image: string;
  title?: string;
  subTitle?: string;
}

export interface PotraitImageProps {
  content: PotraitImageData;
  className?: string;
}

const PotraitImage = ({
  className,
  content: { image, title, subTitle },
}: PotraitImageProps) => {
  const classes = useStyles();
  return (
    <div className={`${classes.potraitWrapper} ${className}`}>
      <img
        className={classes.imagePotrait}
        src={image}
        alt={title || 'image'}
      />
      {title && (
        <Typography variant='h4' display='block'>
          {title}
        </Typography>
      )}
      {subTitle && <Typography display='block'>{subTitle}</Typography>}
    </div>
  );
};

export default PotraitImage;
