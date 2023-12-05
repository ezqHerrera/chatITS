import './App.css';
import React, { useContext } from 'react';
import './components/BarraNavStyle.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from './assets/chat-its-logo.svg';

import { LoginContext, LoginContextProvider } from './context/LoginContext';
import { LoginForm, RegisterForm } from './components/ModalForm';
import Home from './pages/Home';

function App() {
  return (
    <>
      <LoginContextProvider>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
            <Toolbar>
              <a href="/"><img src={logo} alt='Logo'/></a>
              <div className='appBarLinks' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <a href='/'>Home</a>
                <a>Mis Posts</a>
                <a>Perfil y Cuenta</a>

                  <LoginForm/>
                  <RegisterForm/>
              </div>
            </Toolbar>
          </AppBar>
        </Box>

        <Home/>
      </LoginContextProvider>
    </>
  )
}

export default App;