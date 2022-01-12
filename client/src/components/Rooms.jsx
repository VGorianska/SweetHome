import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function RoomsImageList() {
    return (
        <ImageList sx={{ width: 350, height: 700, m: '0.8rem', mt: 0 }}>
            <ImageListItem key="Subheader" cols={2}>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.2)' }}
                        title={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Houses',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bedrooms'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Kids rooms'
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchens'
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hallways'
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Bathrooms',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Color Palettes'
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Living rooms'
    },


];
