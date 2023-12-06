import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { UserContext } from "../context/UserContext";

// Modal para crear un post
const PostModal = () => {
    const { userId } = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

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
        textAlign: 'center'
    }

    const formStyle = {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '3em'
    }

    const handlePost = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3000/api/posts', {userId, title, content, url})
            .then((response) => {
                console.log('Se agregó un post');
                setOpen(false);
            })
            .catch((error) => {
                console.error('Hubo un error:', error);
            });
    }

    return (
        <div>
            <Button color='primary' variant='outlined' onClick={handleOpen}>crear post</Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <h2>Crear nuevo post</h2>

                    <form method='dialog' style={formStyle} onSubmit={handlePost}>
                        <label htmlFor='title' placeholder="Ingrese el título del post">Título</label>
                        <input id='title' type='text' maxLength='30' value={title} required onChange={(e) => setTitle(e.target.value)}/>

                        <label htmlFor='content' placeholder="Ingrese el contenido del post">Contenido</label>
                        <input id='content' type='text' maxLength='280' value={content} required onChange={(e) => setContent(e.target.value)}/>

                        <label htmlFor='url' placeholder="Ingrese la url de una imagen (opcional)">URL</label>
                        <input id='url' type='url' value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </form>

                    <ButtonGroup variant='text' sx={{margin: 2}}>
                        <Button type="submit" onClick={handlePost}>crear post</Button>
                        <Button type="reset" onClick={handleClose}>cancelar</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </div>
    );
};

// Modal para actualizar un post
const UpdatePostModal = ({showButton, postId}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

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
        textAlign: 'center'
    }

    const formStyle = {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '3em'
    }

    const handleUpdate = (event, id) => {
        event.preventDefault();
        axios
            .put(`http://localhost:3000/api/posts/${id}`, {title, content, url})
            .then((response) => {
                console.log(`Se actualizó el post con id ${id}`);
                setOpen(false);
            })
            .catch((error) => {
                console.log(`Se produjo un error: ${error}`);
            });
    }

    return (
        <div>
            {showButton &&
                <IconButton aria-label="edit" onClick={handleOpen}>
                    <EditIcon />
                </IconButton>
            }
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <h2>Actualizar post</h2>

                    <form method='dialog' style={formStyle} onSubmit={handleUpdate}>
                        <label htmlFor='title' placeholder="Ingrese el título del post">Título</label>
                        <input id='title' type='text' maxLength='30' value={title} onChange={(e) => setTitle(e.target.value)}/>

                        <label htmlFor='content' placeholder="Ingrese el contenido del post">Contenido</label>
                        <input id='content' type='text' maxLength='280' value={content} onChange={(e) => setContent(e.target.value)}/>

                        <label htmlFor='url' placeholder="Inserte la url de una imagen (opcional)">URL</label>
                        <input id='url' type='url' value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </form>

                    <ButtonGroup variant='text' sx={{margin: 2}}>
                        <Button type="submit" onClick={() => handleUpdate(postId)}>actualizar post</Button>
                        <Button type="reset" onClick={handleClose}>cancelar</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </div>
    );
};

export {PostModal, UpdatePostModal};