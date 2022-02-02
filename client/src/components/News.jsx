import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Stack, Button, Fab } from '@mui/material';
import { red } from '@mui/material/colors';
import { Share, KeyboardArrowUp } from '@mui/icons-material';
import articles from "../articles.json";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";
import ScrollTop from "../components/ScrollToTop";

export default function News(props) {
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
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </Stack>
    );
}
