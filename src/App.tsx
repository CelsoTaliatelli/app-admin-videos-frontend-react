import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import { ThemeProvider, Box } from '@mui/system';
import { appTheme } from './config/theme';
import { Routes, Route } from 'react-router-dom';



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
          <Routes>
            <Route path="/" element={<h1>Olá</h1>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
