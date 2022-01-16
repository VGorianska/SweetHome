import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function KitchensList() {
    return (

        <ImageList sx={{ display: 'flex', flexDirection: 'column' }}>
            <ImageListItem>
            </ImageListItem>
            {itemData.map((item, i) => (
                <ImageListItem key={i}>
                    <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.1)'}}
                        title={item.title}
                        position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="right"
                    />
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        loading="eager"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1599941973480-33ce6bbca25d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1639150290415-b059bf94ec7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1639414674868-9a2c2f315119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1571116597236-b8a3ebe15f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1638555198321-df437d423f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1639150290415-b059bf94ec7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
    },
];
