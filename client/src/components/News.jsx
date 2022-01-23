import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';


export default function News() {
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '60px 0' }}>
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </Container>
    );
}