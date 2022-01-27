import * as React from 'react';
import { ImageList, ImageListItem, IconButton, ImageListItemBar, Container, Tabs, tabsClasses, Tab, Box, Slide, Dialog, DialogTitle, DialogContent } from '@mui/material';
import {Star, HighlightOff} from '@mui/icons-material';
import { findPhotos, getFavourites, setFavourites } from '../lib/data.js';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Favourites() {
    const [currentTab, setCurrentTab] = React.useState("favourites");
    const photos = findPhotos();   
    const [open, setOpen] = React.useState(false);
    const [openedImg, setOpenedImg] = React.useState();
    const [favouritesState, setFavouritesState] = React.useState(getFavourites());

    const handleClickOpen = (imgUrl) => {
        setOpenedImg(imgUrl)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRoomChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    function toggleFavourite(imageId) {
        const i = favouritesState.indexOf(imageId)
        const newFavourites = [...favouritesState]
        if (i === -1) {
            newFavourites.push(imageId)
        } else {
            newFavourites.splice(i, 1)
        }
        setFavourites(newFavourites)
        setFavouritesState(newFavourites)
    }
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '60px 0' }}>
            <Box sx={{ flexGrow: 1, width: '100%', height: '40px', bgcolor: 'inherit', padding: 0, margin: 0 }}>
                <Tabs
                    value={currentTab}
                    onChange={handleRoomChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="visible arrows tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        }
                    }}
                >
                    <Tab label="All Favourites" value="favourites" />
                    
                </Tabs>
            </Box>

            <ImageList cols={2} gap={4}>
                {photos
                    .filter((photo) => favouritesState.includes(photo.id))
                    .map((item, i) => (
                        <ImageListItem key={i}>
                            <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        onClick={() => toggleFavourite(item.id)}
                                        sx={{ color: 'white' }}
                                        aria-label={`star ${item.title}`}
                                    >
                                        <Star />
                                    </IconButton>
                                }
                                actionPosition="right"
                            />
                            <img
                                onClick={() => handleClickOpen(item.url)}
                                src={`${item.url}?w=248&fit=crop&auto=format`}
                                loading="eager"
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{ backgroundColor: "black" }}
                fullScreen={true}
            >
                <DialogTitle sx={{ backgroundColor: "black" }}>
                    <IconButton onClick={handleClose} sx={{ ml: "auto" }}>
                        <HighlightOff sx={{ color: "white" }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ m: 0, backgroundColor: "black"}}>
                    <img
                        src={`${openedImg}?w=1200&fit=crop&auto=format`}
                        style={{ width: "100%" }}
                    />
                </DialogContent>
            </Dialog>
        </Container>
    )
}
