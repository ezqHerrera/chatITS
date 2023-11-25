import './App.css';
import * as React from 'react';
import './components/BarraNavStyle.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from './assets/chat-its-logo.svg';

import Home from './pages/Home';
import {LoginForm} from './components/ModalForm';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
          <Toolbar>
            <a href="/"><img src={logo} alt='Logo'/></a>
            <div className='appBarLinks' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <a href='/'>Home</a>
              <a>Mis Posts</a>
              <a>Perfil y Cuenta</a>
              <ButtonGroup variant='text'>
                <LoginForm>Iniciar sesión</LoginForm>
                <Button sx={{color: '#90caf9'}}>Registrarse</Button>
              </ButtonGroup>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <Home/>
    </>
  )
}

export default App;