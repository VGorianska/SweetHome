import * as React from 'react';
import { ImageList, ImageListItem, IconButton, ImageListItemBar, Container, Tabs, Tab, tabsClasses, Box, Dialog, DialogTitle, DialogContent, Slide } from '@mui/material';
import { Star, StarBorder, HighlightOff } from '@mui/icons-material';
import { findPhotos, getFavourites, setFavourites } from '../lib/data.js';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainImgList() {
    const [currentTab, setCurrentTab] = React.useState("livingroom");
    const photos = findPhotos({ type: currentTab });
    const [favouritesState, setFavouritesState] = React.useState(getFavourites());
    const [open, setOpen] = React.useState(false);
    const [openedImg, setOpenedImg] = React.useState();
    console.log(favouritesState)
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
                    <Tab label="Living Rooms" value="livingroom" />
                    <Tab label="Kitchens" value="kitchen" />
                    <Tab label="Bedrooms" value="bedroom" />
                    <Tab label="Bathrooms" value="bathroom" />
                    <Tab label="Kid's Rooms" value="kidsroom" />
                    <Tab label="Hallways" value="hallway" />
                    <Tab label="Workspaces" value="workspace" />
                    <Tab label="Dressingrooms" value="dressingroom" />
                    <Tab label="Stairs" value="stairs" />
                    <Tab label="Basements" value="basement" />
                    <Tab label="Garages" value="garage" />
                    <Tab label="Fitness Rooms" value="fitnessroom" />
                    <Tab label="Hauses" value="houses" />
                </Tabs>
            </Box>

            <ImageList cols={2} gap={4}>
                {photos
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
                                        {favouritesState.includes(item.id) ? <Star /> : <StarBorder />}
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
                <DialogContent sx={{ m: 0, backgroundColor: "black" }}>
                    <img
                        src={`${openedImg}?w=1200&fit=crop&auto=format`}
                        style={{ width: "100%" }}
                    />
                </DialogContent>
            </Dialog>
        </Container>
    )
}
