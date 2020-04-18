import React, { useRef, useState } from 'react';
import {
  Grid,
  IconButton,
  makeStyles,
  createStyles,
  Button,
  Theme,
  Typography,
  Snackbar,
} from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import myImage from '../../assets/images/me.jpeg';
import Notification from '../../components/notification';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      color: theme.palette.primary.main,
      display: 'flex',
      textAlign: 'left',
      marginBottom: '47px',
    },
    landingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    left: { color: theme.palette.primary.main },
    imageBackground: {
      // width: 'calc(100% - 20px)',
      minHeight: 'calc(100vh - 198px)',
      background: `url(${myImage})`,
      backgroundImage: 'contain',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',

      [theme.breakpoints.down('sm')]: {
        minHeight: '50vh',
        width: '100%',
      },
    },
    right: {
      color: theme.palette.primary.main,
    },
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
      '& span': {
        color: theme.palette.common.white,

        '& svg': {
          marginRight: '10px',
        },
      },
    },
    grid: {
      marginBottom: '1.25rem',
    },
    emailHeading: {
      fontSize: '0.75rem',
    },
    email: {
      cursor: 'pointer',
    },
    caption: {
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontFamily: 'PoppinsBold',
      color: theme.palette.background.default,
      textAlign: 'center',
    },
  }),
);

const Landing = () => {
  const classes = useStyles();
  const email = useRef(null);
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = 'nurshahadahrashid@gmail.com';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();

    setOpen(!open);
  };

  const [isdownload, setdownload] = useState(false);

  const spring = useSpring({
    number: isdownload ? 100 : 0,
    from: { number: 0 },
  });
  const buttonclick = () => {
    setdownload(!isdownload);
    fetch('http://localhost:3000/me/resume.pdf').then((response) => {
      console.log('response', response);
      console.log(response?.headers?.get('content-length'));
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'http://localhost:3000/me/resume.pdf';
        a.click();
        console.log('in here');
      });
    });
  };

  return (
    <div>
      <Grid container justify='flex-start' className={classes.grid} spacing={2}>
        <Grid item xs={12} md={9}>
          <div className={classes.imageBackground} />
        </Grid>
        <Grid item xs={12} md={3} className={classes.landingWrapper}>
          <div>
            {isdownload && <animated.span>{spring.number}</animated.span>}
          </div>
          <div className={classes.wrapper}>
            <div className={classes.left}>
              <IconButton
                className={classes.button}
                onClick={copyToClipboard}
                disableRipple
              >
                <FileCopyOutlinedIcon fontSize='small' />
              </IconButton>
            </div>
            <div className={classes.right}>
              <Typography variant='h5' className={classes.emailHeading}>
                COPY MY EMAIL:
              </Typography>
              <span className={classes.email} onClick={copyToClipboard}>
                nurshahadahrashid@gmail.com
              </span>
            </div>
          </div>

          <Button
            size='large'
            className={classes.resumeButton}
            onClick={buttonclick}
            // component='a'
            // href='https://github.com/nur-sha/me/raw/gh-pages/resume.pdf'
          >
            <DescriptionOutlinedIcon />
            Download Resume
          </Button>
        </Grid>
      </Grid>
      <Notification
        autoHideDuration={2000}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <Typography variant='caption' className={classes.caption}>
          Copied
        </Typography>
      </Notification>
    </div>
  );
};

export default Landing;
