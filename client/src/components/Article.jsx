import * as React from 'react';
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Stack } from '@mui/material';
import { red } from '@mui/material/colors';
import { Star, Share } from '@mui/icons-material';
import articles from "../articles.json";
import { RWebShare } from "react-web-share";





export default function Article() {
    let params = useParams();
    console.log(params)
    const article = articles.find((item) => item.id == params.article)
    return (
        <Stack spacing={2} sx={{ background: '#dde0e7', padding: 0, m: '70px 0' }}>
            <Card sx={{ maxWidth: 345 }}>
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
                {article.contents.map((item, i) => <CardContent key={i}><Typography variant="body2" color="text.secondary">{item}</Typography></CardContent>)}
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
                </CardActions>

            </Card>
        </Stack>
    );
}
