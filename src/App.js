import React from 'react';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Account from './components/auth/Account';
import { AuthContextProvider } from './context/AuthContext';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { AppTheme } from './theme/AppTheme';
import './style.css'
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <AppTheme>

      <AuthContextProvider>
      <CssBaseline />
        <Routes>
          <Route path='/' element={<Signin />} />

          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </AppTheme>
  );
}

export default App;
