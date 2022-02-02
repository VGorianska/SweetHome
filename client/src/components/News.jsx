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
import { Stack, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import articles from "../articles.json";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";



export default function News() {
    const navigate = useNavigate();

    const selectedIndex = location.pathname;
    const handleMenuItemClick = (url) => {
        navigate(url, { replace: true });

    };
    return (
        <Stack spacing={2} sx={{ background: '#dde0e7', padding: 0, m: '70px 0' }}>
            {articles.map((article, i) => <Card key={i}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {article.author.split(" ").map((item) => item[0])}
                        </Avatar>
                    }

                    title={article.title}
                    subheader={article.author}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={article.img}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {article.teaser}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Star />
                    </IconButton>
                    <RWebShare
                        data={{
                            text: "Look, what I found on Sweet Home App:",
                            title: `${article.title}\n ${article.author}`,
                            contents: article.contents
                        }}
                    >
                        <IconButton><Share /></IconButton>
                    </RWebShare>
                    <Button variant="contained" sx={{ ml: "auto" }} onClick={() => handleMenuItemClick('/news/1')} selected={selectedIndex === '/news/1'}>Read more</Button>
                </CardActions>

            </Card>
            )}


            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    );
}
