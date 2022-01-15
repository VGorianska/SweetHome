import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { House, BedroomParent, BedroomBaby, SoupKitchen, Checkroom, Shower, Weekend, DinnerDining } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



export default function HomePageIconList() {
    return (
        <Container sx={{ mt: '1rem', background: '#dde0e7'}}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                <Box sx={{ background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center' }}>
                    <IconButton LinkComponent={Link} to="/houses" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <House sx={{ fontSize: '5rem', color: '#7ba59e' }} />Houses
                    </IconButton>
                </Box>

                <Box sx={{ background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center' }}>
                    <IconButton LinkComponent={Link} to="/livingrooms" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <Weekend sx={{ fontSize: '5rem', color: '#5f73b3' }} />Livingrooms
                    </IconButton>
                </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                <Box sx={{ mt: '0.5rem', background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center'  }}>
                    <IconButton LinkComponent={Link} to="/bedrooms" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <BedroomParent sx={{ fontSize: '5rem', color: '#c96588' }} />Bedrooms
                    </IconButton>
                </Box>
                <Box sx={{ mt: '0.5rem', background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center'  }}>
                    <IconButton LinkComponent={Link} to="/kidsrooms" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <BedroomBaby sx={{ fontSize: '5rem', color: '#ab90f0' }} />Kid's&nbsp;rooms
                    </IconButton>
                </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                <Box sx={{ mt: '0.5rem', background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center'  }}>
                    <IconButton LinkComponent={Link} to="/kitchens" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <SoupKitchen sx={{ fontSize: '5rem' }} />Kitchens
                    </IconButton>
                </Box>
                <Box sx={{ mt: '0.5rem', background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center'  }}>
                    <IconButton LinkComponent={Link} to="/diningrooms"  aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <DinnerDining sx={{ fontSize: '5rem', color: '#f8b703' }} />Dining&nbsp;rooms
                    </IconButton>
                </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                <Box sx={{ mt: '0.5rem', background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center'  }}>
                    <IconButton LinkComponent={Link} to="/bathrooms" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                        <Shower sx={{ fontSize: '5rem',  color: '#6fdbed' }} />Bathrooms
                    </IconButton>
                </Box>
                <Box sx={{ mt: '0.5rem', background: '#fafafc', width: 180, height: 128, display: 'flex', justifyContent: 'center'  }}>
                    <IconButton LinkComponent={Link} to="/hallways" aria-label="delete" sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around'}}>
                        <Checkroom color='primary' sx={{ fontSize: '5rem' }} />Hallway
                    </IconButton>
                </Box>
            </Stack>
        </Container>
    );
}