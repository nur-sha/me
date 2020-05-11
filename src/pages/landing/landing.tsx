import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Hidden,
} from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import myImage from '../../assets/images/me.jpeg';
import Notification from '../../components/notification';
import DownloadButton from '../../components/downloadButton';
import fonts from '../../config/fonts';
import Typer from '../../components/typer/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      color: theme.palette.primary.main,
      display: 'flex',
      textAlign: 'left',
    },
    landingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    left: { color: theme.palette.primary.main },
    imageBackground: {
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
      fontFamily: fonts.PoppinsBold,
      color: theme.palette.background.default,
      textAlign: 'center',
    },
  }),
);

const Landing = () => {
  const classes = useStyles();
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

  return (
    <div>
      <Grid container justify='flex-start' className={classes.grid} spacing={2}>
        <Hidden smDown>
          <Grid item xs={12} md={7}>
            <div className={classes.imageBackground} />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5} className={classes.landingWrapper}>
          <Grid item xs={12}>
            <Typography variant='h1'>
              Hello! You can call me Nur and I'm a frontend developer based in
              Singapore
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typer
              words={[
                {
                  word: 'Experience with ReactJS',
                  boldWordFromLast: 1,
                },
                {
                  word: 'Build responsive web applications',
                  boldWordFromLast: 2,
                },
                {
                  word: 'Write test with Jest',
                  className: 'class2',
                  boldWordFromLast: 1,
                },
                {
                  word: 'Believes in simplicity',
                  boldWordFromLast: 1,
                },
              ]}
            />
          </Grid>
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

          <DownloadButton />
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
