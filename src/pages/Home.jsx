import { CircularProgress } from "@mui/material";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import { teal } from "@mui/material/colors";

import usePosts from '../hooks/usePosts';

const padded = {
    paddingLeft: '3rem',
    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'center'
}

function Home() {
    const lista = usePosts();
    const posts = lista.posts;

    const theme = createTheme ({
        typography: {
          fontFamily: [
            'Source Code Pro',
            'sans-serif'
          ].join(','),
        },});

    if (lista.length === 0) {
        return (
            <CircularProgress/>
        );
    }
    else {
        return (
            <div style={padded}>
                <div id="postsContainer">
                    <ThemeProvider theme={theme}>
                        {posts.map(post => (
                            <Card key={post.id} sx={{ maxWidth: 600, margin: '2rem', }}>
                                <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: teal[700]}} aria-label="avatar">
                                    사용자
                                    </Avatar>
                                }
                                title={post.userId}
                                subheader={post.createdAt}
                                />
                                <CardMedia
                                component="img"
                                image={post.url}
                                alt="imagen del post"
                                sx={{ maxHeight: 500 }}
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

                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>

                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>

                                </CardActions>
                            </Card>
                        ))}
                    </ThemeProvider>
                </div>
            </div>
        );
    }

}

export default Home;