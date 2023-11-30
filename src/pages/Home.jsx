import { CircularProgress } from "@mui/material";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import { teal } from "@mui/material/colors";

import usePosts from '../hooks/usePosts';
import axios from "axios";
import { UpdatePostModal } from "../components/PostModal";

const padded = {
    paddingLeft: '3rem',
    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'center'
}

const Home = () => {
    const lista = usePosts();
    const posts = lista.posts;

    const theme = createTheme ({
        typography: {
          fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
        },
    });

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:3000/api/posts/${id}`)
            .then((response) => {
                console.log(`Se eliminó el post con id ${id}`)
            })
            .catch((error) => {
                console.error('Hubo un error: ', error)
            });
    };

    if (lista.length === 0) {
        return (
            <CircularProgress/>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <div style={padded}>
                    <div id="postsContainer">
                        {posts.map(post => (
                            <Card key={post.id} sx={{ maxWidth: 600, margin: '2rem', }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{bgcolor: teal[600]}} aria-label="avatar">
                                        用户
                                        </Avatar>
                                    }
                                    title={post.userId}
                                    subheader={post.createdAt}
                                />
                                <CardMedia
                                    component="img"
                                    image={post.url}
                                    alt=""
                                    sx={{ maxHeight: 600 }}
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.primary" fontWeight='bold'>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary" sx={{ maxHeight: 500 }}>
                                        {post.content}
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing>
                                    <UpdatePostModal postId={post.id} showButton={true}/>

                                    <IconButton aria-label="delete" onClick={() => handleDelete(post.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </div>
            </ThemeProvider>
        );
    }
};

export default Home;