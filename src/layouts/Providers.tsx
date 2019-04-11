import React from 'react';
import { Provider } from 'react-redux';
import store from '@ducks/store';

import theme from '@styles/createMyTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
