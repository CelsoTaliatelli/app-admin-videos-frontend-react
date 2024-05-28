import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import { ThemeProvider, Box } from '@mui/system';
import { appTheme } from './config/theme';
import { Routes, Route } from 'react-router-dom';
import ListCategory from './features/categories/ListCategory';
import CreateCategory from './features/categories/CreateCategory';
import EditCategory from './features/categories/EditCategory';



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
            <Route path="/" element={<ListCategory />} />
            <Route path="/categories" element={<ListCategory />} />
            <Route path="/categories/create" element={<CreateCategory />} />
            <Route path="/categories/edit/:id" element={<EditCategory />} />

            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
