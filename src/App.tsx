import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import { ThemeProvider, Box } from '@mui/system';
import { appTheme } from './config/theme';



function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main"
        sx={{
          height:"100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <h1>Olá</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
