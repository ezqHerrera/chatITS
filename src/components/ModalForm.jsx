import React from "react";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";

// Modal para iniciar sesión
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const formStyle = {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '3em'
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3000/auth/login', {email, password})
            .then((response) => {
                setOpen(false);
                setIsloggedIn(true);
                console.log(`Sesión iniciada desde ${email}`);
            })
            .catch((error) => {
                console.log('Hubo un error:', error);
            });
    }

    const logOut = () => {
        setEmail(null);
        setPassword(null);
        setIsloggedIn(false);
    }
    // TODO retornar botón de CERRAR SESIÓN si está logueado
    return (
        <div>
            {isLoggedIn
                ? <Button color='error' variant='text' onClick={logOut}>cerrar sesión</Button>
                : <Button color='#90caf9' variant='text' onClick={handleOpen}>iniciar sesión</Button>
            }
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <h3 sx={'marginBottom' = 2}>Iniciar Sesión</h3>
                    <form method='dialog' style={formStyle} onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" value={email} onChange={(Event) => setEmail(Event.target.value)}/>

                        <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" value={password} onChange={(Event) => setPassword(Event.target.value)}/>

                        <ButtonGroup orientation='vertical' variant='text'>
                            <Button type='submit' onClick={handleSubmit}>iniciar sesión</Button>
                            <Button type='reset' onClick={handleClose}>Cancelar</Button>
                        </ButtonGroup>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export {LoginForm};