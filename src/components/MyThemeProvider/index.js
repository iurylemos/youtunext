import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import useSettings from '@src/hooks/useSettings';
import createTheme from '@src/theme';

function MyThemeProvider({ children }) {
  const { settings } = useSettings();
  const theme = createTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
