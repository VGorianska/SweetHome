import * as React from 'react';
import { Container } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import experts from '../experts.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Experts() {
    const [currentTab, setCurrentTab] = React.useState("architects");

    const handleRoomChange = (event, newValue) => {

        setCurrentTab(newValue);
    };

    function toggleFavourite(imageId) {
        console.log('toggling favourite status', imageId)
    }
    console.log('Tab', currentTab)
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '70px 0' }}>
            <Box sx={{ flexGrow: 1, width: '100%', bgcolor: 'inherit', padding: 0, margin: 0 }}>
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
                    <Tab label="Architects" value="architects" />
                    <Tab label="Interior Architects" value="interior_architects" />
                    <Tab label="Construction Companies" value="construction_companies" />
                    <Tab label="Landscape Designers" value="landscape_designers" />

                </Tabs>
            </Box>


            {experts
                .filter((expert) => expert.type == currentTab)
                .map((item, i) => (
                    <Card sx={{ maxWidth: 345 }} key={i}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`${item.url}?w=248&fit=crop&auto=format`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}

        </Container>
    )
}

