import * as React from 'react';
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Stack, CssBaseline, Fab } from '@mui/material';
import { red } from '@mui/material/colors';
import { Share, KeyboardArrowUp } from '@mui/icons-material';
import articles from "../articles.json";
import ScrollTop from "../components/ScrollToTop";


export default function Article(props) {
    let params = useParams();
    const article = articles.find((item) => item.id == params.article)
    return (
        <React.Fragment>
            <CssBaseline />
            <Stack spacing={2} sx={{ background: '#dde0e7', padding: 0, m: '70px 0' }}>
                <Card>
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
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
