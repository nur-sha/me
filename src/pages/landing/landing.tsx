import React, { useRef } from 'react';
import {
  Grid,
  IconButton,
  makeStyles,
  createStyles,
  Button,
  Theme,
} from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import myImage from '../../assets/images/me.jpeg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      color: theme.palette.primary.main,
      display: 'flex',
      textAlign: 'left',
      marginBottom: '47px',
    },
    landingWrapper: {
      height: 'calc(100vh - 135px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    left: {},
    imageBackground: {
      width: 'calc(100% - 20px)',
      minHeight: 'calc(100vh - 135px)',
      background: `url(${myImage})`,
      backgroundImage: 'contain',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    right: {
      color: theme.palette.text.primary,
    },
    button: {
      paddingTop: 0,
      paddingLeft: 0,
    },
    resumeButton: {
      padding: '20px',
      backgroundColor: theme.actionButton[theme.palette.type],
      '& span': {
        color: theme.palette.common.white,

        '& svg': {
          marginRight: '10px',
        },
      },
    },
  }),
);

const Landing = () => {
  const classes = useStyles();
  const email = useRef(null);

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = 'nurshahadahrashid@gmail.com';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
  };
  return (
    <div>
      <Grid container justify='flex-start'>
        <Grid item xs={12} md={9}>
          <div className={classes.imageBackground} />
        </Grid>
        <Grid item xs={12} md={3} className={classes.landingWrapper}>
          <div className={classes.wrapper}>
            <div className={classes.left}>
              <IconButton
                aria-label='delete'
                className={classes.button}
                onClick={copyToClipboard}
              >
                <FileCopyOutlinedIcon fontSize='small' />
              </IconButton>
            </div>
            <div className={classes.right}>
              <b>COPY MY EMAIL:</b> <br />
              <span>nurshahadahrashid@gmail.com</span>
            </div>
          </div>

          <Button size='large' className={classes.resumeButton}>
            <DescriptionOutlinedIcon />
            Download Resume
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
