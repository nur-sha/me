import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > h1': {
        justifyContent: 'center',
      },
    },
    paper: {
      height: '100%',
      minHeight: '14.5rem',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
    },
    caption: {
      marginTop: 'auto',
    },

    flex: {
      display: 'flex',
    },
    icon: {
      marginLeft: 'auto',
    },
    iconClose: {
      marginLeft: 'auto',
      cursor: 'pointer',
    },
    modalPaper: {
      padding: '0 2.5rem 2.5rem',
      [theme.breakpoints.up('sm')]: {
        padding: '1rem 6rem 6rem',
      },
    },
    controller: {
      position: 'fixed',
      display: 'flex',
      width: 'calc(100% - 5rem)',
      paddingTop: '1.8rem',
      left: '2.5rem',
      top: 0,
      background: theme.palette.background.default,
      zIndex: 1200,

      [theme.breakpoints.up('sm')]: {
        left: '6rem',
        width: 'calc(100% - 10rem)',
      },
    },
    back: {},
    next: {
      marginLeft: 'auto',
    },
    desktopControl: {
      position: 'fixed',
      display: 'flex',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: '100%',
      padding: '0 0.9rem',

      '& svg': {
        marginRight: '.8rem',
        fontSize: '3rem',
        cursor: 'pointer',

        '&:hover': {
          opacity: 0.8,
        },
      },
    },
    description: {
      marginTop: '2.5rem',

      '& p': {
        marginBottom: '1.2rem',
      },
    },
  }),
);

export default useStyles;
