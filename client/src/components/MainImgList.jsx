import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import roomPhotos from '../roomPhotos.json';
import { Star, StarBorder, HighlightOff } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainImgList() {
    const [currentTab, setCurrentTab] = React.useState("livingroom");
    const [photos, setPhotos] = React.useState(roomPhotos);
    const [open, setOpen] = React.useState(false);
    const [openedImg, setOpenedImg] = React.useState();

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
        const thePhotos = photos.map((photo) => {
            if (photo.id === imageId) {
                photo.isFavourite = !photo.isFavourite
            }
            return photo
        })
        setPhotos(thePhotos)
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
                    .filter((roomPhoto) => roomPhoto.type == currentTab)
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
                                        {item.isFavourite ? <Star /> : <StarBorder />}
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
