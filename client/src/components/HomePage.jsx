import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { House, BedroomParent, BedroomBaby, SoupKitchen, Checkroom, Shower, Weekend, DinnerDining} from '@mui/icons-material';


export default function HomePageIconList() {
  return (
      <Container sx={{ mt: '2rem' }}>
    <Stack direction="row" spacing={2} sx={{ mb: '1rem', justifyContent: 'space-evenly'}}>
      <Button variant="outlined" startIcon={<House />} sx={{ padding: '3rem' }}>
      </Button>
      <Button variant="outlined" startIcon={<Weekend />} sx={{ padding: '3rem' }}>
      </Button>
    </Stack>
    <Stack direction="row" spacing={2} sx={{ mb: '1rem', justifyContent: 'space-evenly'}}>
      <Button variant="outlined" startIcon={<BedroomParent />} sx={{ padding: '3rem' }}>
      </Button>
      <Button variant="outlined" startIcon={<BedroomBaby />} sx={{ padding: '3rem' }}>
      </Button>
    </Stack>
    <Stack direction="row" spacing={2} sx={{ mb: '1rem', justifyContent: 'space-evenly'}}>
      <Button variant="outlined" startIcon={<SoupKitchen />} sx={{ padding: '3rem' }}>
      </Button>
      <Button variant="outlined" startIcon={<DinnerDining />} sx={{ padding: '3rem' }}>
      </Button>
    </Stack>
    <Stack direction="row" spacing={2} sx={{ mb: '1rem', justifyContent: 'space-evenly'}}>
      <Button variant="outlined" startIcon={<Shower />} sx={{ padding: '3rem' }}>
      </Button>
      <Button variant="outlined" startIcon={<Checkroom />} sx={{ padding: '3rem' }}>
      </Button>
    </Stack>
    </Container>
  );
}