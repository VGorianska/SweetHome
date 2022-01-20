import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import roomPhotos from '../roomPhotos.json';
import StarIcon from '@mui/icons-material/Star';

export default function MainImgList() {
    const [currentTab, setCurrentTab] = React.useState("livingroom");

    const handleRoomChange = (event, newValue) => {

        setCurrentTab(newValue);
    };

    function toggleFavourite(imageId) {
        console.log('toggling favourite status', imageId)
    }
    console.log('Tab', currentTab)
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, margin: 0 }}>
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
                {roomPhotos
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
                                    {item.isFavourite ? <StarIcon /> : <StarBorderIcon />}
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
