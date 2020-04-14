import { createMuiTheme } from '@material-ui/core';
import colors from './colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ThemeMode } from '../App';

const theme = {
  palette: {
    primary: {
      light: colors.black,
      main: colors.white,
      dark: colors.white,
    },
    secondary: {
      light: colors.purple,
      main: colors.purple,
      dark: colors.brightPurple,
      contrastText: '#fff',
    },
    action: {
      hover: 'rgba(0,164,230,0.2)',
      selected: 'rgba(0,164,230,0.2)',
    },
    monoChrome: {
      light: colors.black,
      main: colors.white,
      dark: colors.darkGrey,
      contrastText: '#fff',
    },
    text: {
      primary: colors.black,
      secondary: colors.darkMonochrome,
    },
  },
};

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    menu: {
      dark: '#fff';
      light: '#6d7278';
    };
    actionButton: {
      dark: '#800080';
      light: '#800080';
    };
  }

  interface ThemeOptions {
    menu?: {
      dark?: string;
      light?: string;
    };
    actionButton?: {
      dark?: string;
      light?: string;
    };
  }
}

export const getThemeMode = (type: ThemeMode = 'light'): ThemeOptions => {
  return createMuiTheme({
    ...theme,
    palette: {
      type,
      ...theme.palette,
      primary: {
        light: colors.black,
        main: colors.black,
        dark: colors.white,
        contrastText: '#fff',
      },
      background: {
        default: type === 'light' ? '#fff' : '#000',
      },
      text: {
        primary: type === 'light' ? '#000' : '#fff',
        secondary: type === 'light' ? '#131313' : '#c4c4c4',
        disabled: type === 'light' ? '#c4c4c4' : '#444444',
      },
    },
    menu: {
      dark: '#fff',
      light: '#6d7278',
    },
    actionButton: {
      dark: '#800080',
      light: '#800080',
    },
    typography: {
      fontFamily: 'Poppins, Roboto, sans-serif',
      h1: {
        fontSize: '3rem',
        fontWeight: 'bold',
        paddingBottom: '30px',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        paddingBottom: '1rem',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '1.25rem', // 20px
        fontWeight: 'bold',
        paddingBottom: '1rem',
      },
      h5: {
        fontSize: '1rem',
        // fontWeight: 'bold',
      },
      caption: {
        fontSize: '0.75rem',
      },
      button: {
        fontSize: '0.75rem',
        textTransform: 'capitalize',
      },
    },

    overrides: {
      MuiListItem: {
        root: {
          color: type === 'light' ? '#000' : '#fff',
          '&$disabled': {
            opacity: 1,
            color: type === 'light' ? '#c4c4c4' : '#444444',
          },
        },
        disabled: {},
        gutters: {
          paddingRight: '12px',
        },
      },
      MuiListItemText: {
        primary: {
          fontSize: '1rem',
        },
      },
      MuiListItemIcon: {
        root: {
          color: 'inherit',
          minWidth: '24px',
          // color: type === 'light' ? '#000' : '#fff',
        },
      },
      MuiSvgIcon: {
        root: {
          height: '16px',
          width: '16px',
        },
      },
      MuiPaper: {
        outlined: {
          backgroundColor: 'transparent',
        },
      },
    },
  });
};

export default theme;
