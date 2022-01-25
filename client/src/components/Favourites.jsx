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
import StarIcon from '@mui/icons-material/Star';

export default function Favourites() {
    const [currentTab, setCurrentTab] = React.useState("favourites");
    const [photos, setPhotos] = React.useState(roomPhotos);

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
                    <Tab label="All Favourites" value="favourites" />
                    {/* <Tab label="+" value="allFavourites" /> */}


                </Tabs>
            </Box>

            <ImageList cols={2} gap={4}>
                {photos
                    .filter((photo) => photo.isFavourite === true)
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
                                        <StarIcon />
                                    </IconButton>
                                }
                                actionPosition="right"
                            />
                            <img
                                src={`${item.url}?w=248&fit=crop&auto=format`}
                                loading="eager"
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
        </Container>
    )
}
