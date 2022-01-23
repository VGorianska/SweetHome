import * as React from 'react';
import { Container } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import experts from '../experts.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { Phone, Email, Share } from '@mui/icons-material';
import Rating from '@mui/material/Rating';




export default function Experts() {
    const [currentTab, setCurrentTab] = React.useState("architects");

    const handleRoomChange = (event, newValue) => {

        setCurrentTab(newValue);
    };

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
                .map((expert, i) => (
                    <Card sx={{ maxWidth: 345 }} key={i}>
                        <CardHeader
                            sx={{
                                alignItems: "end",
                                height: 130,
                                color: 'white', 
                                background: `linear-gradient(rgba(125, 125, 125, 0.5),rgba(0, 0, 0, 0.5)), url(${expert.img}&w=348&h=200&auto=format)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                            avatar={
                                <Avatar src={expert.avatar} />
                            }
                            title={expert.name}
                            subheader={<Rating value={expert.rating} precision={0.1} readOnly />}
                        />
                        <CardActions>
                            <IconButton sx={{ marginRight: 'auto' }}><Share /></IconButton>
                            <IconButton onClick={() => location=`callto: ${expert.phonenumber}`}><Phone /></IconButton>
                            <IconButton onClick={() => location=`mailto: ${expert.mail}`}><Email /></IconButton>
                        </CardActions>
                    </Card>
                ))}

        </Container>
    )
}
