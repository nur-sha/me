import React from 'react';
import { Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      paddingTop: 0,
      paddingLeft: 0,
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    resumeButton: {
      padding: '20px',
      borderRadius: 0,
      backgroundColor: theme.palette.secondary.main,
      marginTop: '2.5rem',
      '&:hover': {
        //you want this to be the same as the backgroundColor above
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.8,
      },

      '& span': {
        color: theme.palette.common.white,

        '& svg': {
          marginRight: '10px',
        },
      },
    },
  }),
);

export interface DownloadButtonProps {
  filename?: string;
  className?: string;
  onClick?: () => void;
}

const DownloadButton = ({
  filename = 'File',
  className,
  onClick,
}: DownloadButtonProps) => {
  const classes = useStyles();
  const buttonclick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      size='large'
      className={`${classes.resumeButton} ${className}`}
      onClick={buttonclick}
      component='a'
      href={require('../../documents/resume.pdf')}
      target='_blank'
    >
      <DescriptionOutlinedIcon />
      Download Resume
    </Button>
  );
};

export default DownloadButton;
