const mainTheme = {
  colors: {
    darkMain: '#081328',
    main: '#14213D',
    lightMain: '#485570',
    secondary: '#FCA311',
    darkSecondary: '#BA780E',
    white: '#FFFEF7',
    black: '#000708',
    darkLine: '#0E0E0E',
    lightLine: '#F2F2E7',
    darkGray: '#d2d2d2',
    darkerGray: '#808080',
    gray: '#e8e8e8',
    lightGray: '#f6f6f6',
    error: '#ff4941',
  },
  shadow: '0 5px 10px 0px rgba(0,0,0,0.18)',
  smallShadow: '0 0 8px 0 rgba(0,0,0,.12)',
};

export type Theme = typeof mainTheme;

export default mainTheme;
