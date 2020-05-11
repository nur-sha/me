import { createMuiTheme } from '@material-ui/core';
import colors from './colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ThemeMode } from '../context/themeContext';
import fonts from './fonts';

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
      color: string;
    };
  }
}

export enum ColorSetList {
  PRIMARY,
  PRIMARY_INVERTED,
  SECONDARY,
  SECONDARY_TEXT,
  SECONDARY_INVERTED,
  DISABLED,
  MENU,
}

const getColorSet = (mode: ThemeMode, themeName: ColorSetList): string => {
  switch (themeName) {
    case ColorSetList.PRIMARY:
      return mode === 'light' ? colors.black : colors.white;
    case ColorSetList.PRIMARY_INVERTED:
      return mode === 'light' ? colors.white : colors.black;
    case ColorSetList.DISABLED:
      return mode === 'light' ? colors.secondaryLight : colors.disableDark;
    case ColorSetList.SECONDARY:
      return mode === 'light'
        ? colors.secondaryBaseLight
        : colors.secondaryBaseDark;
    case ColorSetList.SECONDARY_TEXT:
      return mode === 'light' ? colors.secondaryDark : colors.secondaryLight;
    case ColorSetList.MENU:
      return mode === 'light' ? colors.menuDark : colors.white;
    default:
      return mode === 'light' ? colors.black : colors.white;
  }
};

export const getThemeMode = (type: ThemeMode = 'light'): ThemeOptions => {
  return createMuiTheme({
    palette: {
      type,
      background: {
        default: getColorSet(type, ColorSetList.PRIMARY_INVERTED),
      },
      text: {
        primary: getColorSet(type, ColorSetList.PRIMARY),
        secondary: getColorSet(type, ColorSetList.SECONDARY_TEXT),
        disabled: getColorSet(type, ColorSetList.DISABLED),
      },
      primary: {
        main: getColorSet(type, ColorSetList.PRIMARY),
      },
      secondary: {
        main: getColorSet(type, ColorSetList.SECONDARY),
      },
    },
    menu: {
      color: getColorSet(type, ColorSetList.MENU),
    },
    typography: {
      fontFamily: fonts.PoppinsRegular,
      h1: {
        fontSize: '3rem',
        fontFamily: fonts.PoppinsBold,
        paddingBottom: '30px',
      },
      h2: {
        fontSize: '2rem',
        fontFamily: fonts.PoppinsBold,
        paddingBottom: '1rem',
      },
      h3: {
        fontFamily: fonts.PoppinsBold,
        fontSize: '1.5rem',
      },
      h4: {
        fontSize: '1.25rem',
        fontFamily: fonts.PoppinsBold,
        paddingBottom: '1rem',
      },
      h5: {
        fontSize: '1rem',
        fontFamily: fonts.PoppinsBold,
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
          color: getColorSet(type, ColorSetList.PRIMARY),
          display: 'flex',
          alignItems: 'flex-start',
          '&$disabled': {
            opacity: 1,
            color: getColorSet(type, ColorSetList.DISABLED),
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
        },
      },
      MuiSvgIcon: {
        colorSecondary: {
          color: getColorSet(type, ColorSetList.SECONDARY_TEXT),
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
          backgroundColor: getColorSet(type, ColorSetList.PRIMARY_INVERTED),
        },
        outlined: {
          backgroundColor: 'transparent',
          color: getColorSet(type, ColorSetList.PRIMARY),
        },
      },
    },
  });
};
