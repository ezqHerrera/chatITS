import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Typography } from "@mui/material";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Modal para iniciar sesión
const PostModal = ({userId}) => {
    const [title, setTitle] = useState('Escriba un título');
    const [content, setContent] = useState('Escriba el contenido del post (280 caracteres máximo)');
    const [url, setUrl] = useState('Inserte la URL de una imagen (opcional)');

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
                console.log('Hubo un error:', error);
            });
    }

    return (
        <div>
            <Button color='primary' variant='outlined' onClick={handleOpen}>crear post</Button>
            <Modal open={open} onClose={handleClose}>
                <Box style={modalStyle}>
                    <Card sx={{ maxWidth: 600, margin: '2rem', }}>
                        <CardMedia
                            onChange={(e) => setUrl(e.target.value)}
                            component="img"
                            image={url}
                            alt=""
                            sx={{ maxHeight: 600 }}
                        />
                        <CardContent>
                            <Typography onChange={(e) => setTitle(e.target.value)} variant="body1" color="text.primary" fontWeight='bold'>
                                {title}
                            </Typography>
                            <Typography onChange={(e) => setContent(e.target.value)} variant="body2" color="text.primary" sx={{ maxHeight: 500 }}>
                                {content}
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>

                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>

                    <ButtonGroup variant='text' sx={{margin: 2}}>
                        <Button type="submit" onClick={handlePost}>crear post</Button>
                        <Button type="reset" onClick={handleClose}>cancelar</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </div>
    );
};

const UpdatePostModal = ({showButton, postId}) => {
    const [title, setTitle] = useState('Escriba un título');
    const [content, setContent] = useState('Escriba el contenido del post (280 caracteres máximo)');
    const [url, setUrl] = useState('Inserte la URL de una imagen (opcional)');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
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
                <Box style={modalStyle}>
                    <Card sx={{ maxWidth: 600, margin: '2rem', }}>
                        <CardMedia
                            onChange={(e) => setUrl(e.target.value)}
                            component="img"
                            image={url}
                            alt=""
                            sx={{ maxHeight: 600 }}
                        />
                        <CardContent>
                            <Typography onChange={(e) => setTitle(e.target.value)} variant="body1" color="text.primary" fontWeight='bold'>
                                {title}
                            </Typography>
                            <Typography onChange={(e) => setContent(e.target.value)} variant="body2" color="text.primary" sx={{ maxHeight: 500 }}>
                                {content}
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>

                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>

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