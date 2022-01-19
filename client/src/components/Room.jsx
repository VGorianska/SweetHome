import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Room() {
    return (

        <ImageList cols={2} gap={4}>
          
            {itemData.map((item, i) => (
                <ImageListItem key={i}>
                    <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
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
        img: 'https://images.unsplash.com/photo-1621856363562-b69071c4042c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1576385587704-fca64bf155c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1599941973480-33ce6bbca25d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80',
    }
];
