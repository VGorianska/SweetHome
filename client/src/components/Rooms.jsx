import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function RoomsImageList() {
    return (

        <ImageList variant="masonry">
            {itemData.map((item, i) => (
                <ImageListItem key={i}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.2)'}}
                        title={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Houses',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        title: 'Bedrooms'
    },
    {
        img: 'https://images.unsplash.com/photo-1613685301918-59b1039422cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        title: 'Kids rooms'
    },
    {
        img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        title: 'Kitchens'
    },
    {
        img: 'https://images.unsplash.com/photo-1532785164954-bd1f69628df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Hallways'
    },
    {
        img: 'https://images.unsplash.com/photo-1608571386933-8e9bf576ea95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        title: 'Bathrooms',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Living rooms'
    },


];
