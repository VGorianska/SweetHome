import * as React from 'react';
import { Search, KeyboardArrowUp } from '@mui/icons-material';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Fab, IconButton, ImageList, ImageListItem, ImageListItemBar, InputBase, Paper, Slide } from '@mui/material';
import roomPhotos from '../roomPhotos.json';
import ScrollTop from "../components/ScrollToTop";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchFun(props) {
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
                    <Search />
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
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </Container>
    )
}
