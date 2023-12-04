import './App.css';
import * as React from 'react';
import './components/BarraNavStyle.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from './assets/chat-its-logo.svg';

import Home from './pages/Home';
import {LoginForm, RegisterForm} from './components/ModalForm';
import { LoginContext } from './context/LoginContext';

function App() {
  const isLoggedIn = React.useContext(LoginContext);
  return (
    <>
    <LoginContext.Provider value={isLoggedIn}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
          <Toolbar>
            <a href="/"><img src={logo} alt='Logo'/></a>
            <div className='appBarLinks' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <a href='/'>Home</a>
              <a>Mis Posts</a>
              <a>Perfil y Cuenta</a>
              <ButtonGroup variant='text'>
                <LoginForm/>
                <RegisterForm/>
              </ButtonGroup>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </LoginContext.Provider>

      <Home/>
    </>
  )
}

export default App;