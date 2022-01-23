import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Star, Share } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';



export default function News() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Stack spacing={2} sx={{ background: '#dde0e7', padding: 0, m: '70px 0' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            MP
                        </Avatar>
                    }

                    title="Ideas for Kitchen Island Seating"
                    subheader="By Mitchell Parker"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Design and remodeling pros share details for creating a stylish and welcoming social hub
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Star />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>

                </CardActions>

            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            MP
                        </Avatar>
                    }

                    title="Ideas for Kitchen Island Seating"
                    subheader="By Mitchell Parker"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Design and remodeling pros share details for creating a stylish and welcoming social hub
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Star />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>

                </CardActions>

            </Card>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    );
}
