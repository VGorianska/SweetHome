import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function HallwaysList() {
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
        img: 'https://images.unsplash.com/photo-1572017791834-6894ae06a6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1615979389741-6cfb168f3798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1640562705307-76b0b4bd1747?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1565910547930-50290bf81a0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1576385587704-fca64bf155c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1578364453487-fa4275da5c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1561024172-0ae2ebd65018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1572017791834-6894ae06a6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
];
