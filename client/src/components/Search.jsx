import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import roomPhotos from '../roomPhotos.json'; import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchFun() {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [photos, setPhotos] = React.useState([]);

    const handleSearch = (event) => {
        event.preventDefault()
        const matched = roomPhotos.filter((roomPhoto) => (roomPhoto.tags || []).includes(query.toLowerCase()))
        setPhotos(matched)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearchChange = (event) => {
        setQuery(event.target.value)
        if (event.key === "Enter") {
            handleSearch(event)   
        }
    }
    return (
        <Container sx={{ background: '#dde0e7', padding: 0, m: '90px 0' }}>
            <Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >

                <InputBase
                    onKeyUp={handleSearchChange}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" onClick={handleSearch} sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Sorry!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            I didn't find anything...
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </Paper>

            <ImageList cols={2} gap={4}>
                {photos
                    .map((item, i) => (
                        <ImageListItem key={i}>
                            <ImageListItemBar sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
                                position="top"
                            />
                            <img
                                src={`${item.url}?w=248&fit=crop&auto=format`}
                                loading="eager"
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
        </Container>
    )
}
