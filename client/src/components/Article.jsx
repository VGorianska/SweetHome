import * as React from 'react';
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Stack, CssBaseline, useScrollTrigger, Box, Fab, Zoom } from '@mui/material';
import { red } from '@mui/material/colors';
import { Star, Share, KeyboardArrowUp } from '@mui/icons-material';
import articles from "../articles.json";
import PropTypes from 'prop-types';



function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 70, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function Article(props) {
    let params = useParams();
    console.log(params)
    const article = articles.find((item) => item.id == params.article)
    return (
        <React.Fragment>
            <CssBaseline />
            <div id="back-to-top-anchor"></div>
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
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>

                    </CardActions>

                </Card>
            </Stack>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
