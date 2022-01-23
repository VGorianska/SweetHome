import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';


export default function Article() {
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '80px 0' }}>
            <Stack spacing={2}>
                <p>New This Week: 6 Kitchen Islands With Conversational Seating</p>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </Container>
    );
}