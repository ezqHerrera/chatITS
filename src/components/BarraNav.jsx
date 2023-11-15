import * as React from 'react';
import './BarraNavStyle.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import logo from '../assets/chat-its-logo.svg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  flexGrow: 1,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function BarraNav() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
        <Toolbar>
          <a href="/"><img src={logo} alt='Logo'/></a>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <div className='appBarLinks' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <a href='/'>Home</a>
            <a>Mis Posts</a>
            <a>Perfil y Cuenta</a>
            <Button sx={{color: '#90caf9'}} variant='text'>Iniciar sesión</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BarraNav;