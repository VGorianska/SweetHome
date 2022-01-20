import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container } from '@mui/material';

export default function Experts() {
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '60px 0' }}>
            <ImageList cols={2} gap={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
                            position="top"
                        />
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        title: 'Architects'
    },
    {
        img: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Interior Architects'
    },
    {
        img: 'https://images.unsplash.com/photo-1592250892572-37524c069b60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Construction Companies'
    },
    {
        img: 'https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
        title: 'Landscape Designers'
    }
];