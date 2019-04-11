import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

interface CustomThemeOptions {
  paletteType: 'light' | 'dark';
}

function getTheme(theme: CustomThemeOptions) {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === 'dark' ? '#1e272e' : '#fff',
        paper: theme.paletteType === 'dark' ? '#1e272e' : '#fff',
      },
    },
  });
}

const theme = getTheme({
  paletteType: 'light',
});

export default theme;
