import { createMuiTheme } from '@material-ui/core';
import colors from './colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ThemeMode } from '../context/themeContext';

export const themeKey = 'THEME_MODE';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    menu: {
      dark: '#fff';
      light: '#6d7278';
      color: '#6d7278';
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
      color: string;
    };
    actionButton?: {
      dark?: string;
      light?: string;
    };
  }
}

export const getThemeMode = (type: ThemeMode = 'light'): ThemeOptions => {
  return createMuiTheme({
    palette: {
      type,
      background: {
        default: type === 'light' ? '#fff' : '#000',
      },
      text: {
        primary: type === 'light' ? '#000' : '#fff',
        secondary: type === 'light' ? '#131313' : '#c4c4c4',
        disabled: type === 'light' ? '#c4c4c4' : '#444444',
      },
      primary: {
        main: type === 'light' ? colors.black : colors.white,
      },
      secondary: {
        main: type === 'light' ? colors.purple : colors.brightPurple,
      },
    },
    menu: {
      dark: '#fff',
      light: '#6d7278',
      color: type === 'light' ? '#6d7278' : '#fff',
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
        fontFamily: 'PoppinsBold',
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
          display: 'flex',
          alignItems: 'flex-start',
          '&$disabled': {
            opacity: 1,
            color: type === 'light' ? '#c4c4c4' : '#444444',
          },

          '& .MuiListItemIcon-root': {
            marginRight: '1rem',
          },
        },
        disabled: {},
        gutters: {
          paddingLeft: 0,
          '& .MuiListItemIcon-root': {
            paddingRight: '0.75rem',
          },
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
        colorSecondary: {
          color: type === 'light' ? '#131313' : '#c4c4c4',
        },
        fontSizeInherit: {
          fontSize: '1rem',
        },
        fontSizeSmall: {
          fontSize: '1.25rem',
        },
        fontSizeLarge: {
          fontSize: '2rem',
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: type === 'light' ? '#fff' : '#000',
          color: type === 'light' ? '#131313' : '#c4c4c4',
        },
        outlined: {
          backgroundColor: 'transparent',
        },
      },
    },
  });
};
