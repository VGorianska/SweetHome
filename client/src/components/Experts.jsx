import * as React from 'react';
import { Tab, Box, Card, CardActions, Avatar, CardHeader, IconButton, Rating, Tabs, tabsClasses, Container, Typography } from '@mui/material';
import { Phone, Email, LocationOn, Share, FilterAlt } from '@mui/icons-material';
import experts from '../experts.json';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { RWebShare } from "react-web-share";


export default function Experts() {
    const [currentTab, setCurrentTab] = React.useState("architects");
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleExpertChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    function handleLocationFilterChange(event, searchWord) {
        setSearchTerm(searchWord)
    }

    const filterOptions = createFilterOptions({
        stringify: (option) => option
    });

    const Locations = []
    experts
        .filter((expert) => expert.type === currentTab)
        .forEach((expert) => {
            if (!Locations.includes(expert.location)) {
                Locations.push(expert.location)
            }
        })

    const filterExpert = (currentTab, expert, searchTerm) => {
        if (searchTerm && searchTerm.length >= 2) {
            console.log(searchTerm)
            return expert.location.includes(searchTerm) || expert.name.includes(searchTerm)
        }
        return expert.type == currentTab; // default
    }

    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '70px 0' }}>
            <Box sx={{ flexGrow: 1, width: '100%', bgcolor: 'inherit', padding: 0, margin: 0 }}>
                <Tabs
                    value={currentTab}
                    onChange={handleExpertChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
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

            <Autocomplete
                id="filter-demo"
                size="small"
                options={Locations}
                getOptionLabel={(option) => option}
                filterOptions={filterOptions}
                sx={{ width: 160, position: "fixed", top: 15, right: 8, zIndex: 999999 }}
                renderInput={(params) => <TextField {...params} variant='standard' />}
                onChange={handleLocationFilterChange}
                onInputChange={handleLocationFilterChange}
            />
            <IconButton sx={{ color: "white", position: "fixed", top: 12, right: 0, zIndex: 999999 }}>
                <FilterAlt />
            </IconButton>


            {experts
                .filter((expert) => expert.type === currentTab)
                .filter((expert) => filterExpert(currentTab, expert, searchTerm))
                .map((expert, i) => (
                    <Card sx={{ mb: 2 }} key={i}>
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
                            <LocationOn />
                            <Typography sx={{ fontSize: 14, marginRight: 'auto' }} color="text.secondary" gutterBottom>
                                {expert.location}
                            </Typography>
                            <RWebShare
                                data={{
                                    text: "Look what I found on Sweet Home App:",
                                    title: `${expert.name}, ${expert.phonenumber}`
                                }}
                            >
                                <IconButton><Share /></IconButton>
                            </RWebShare>
                            <IconButton onClick={() => location = `callto: ${expert.phonenumber}`}><Phone /></IconButton>
                            <IconButton onClick={() => location = `mailto: ${expert.mail}`}><Email /></IconButton>
                        </CardActions>
                    </Card>
                ))}

        </Container>
    )
}

