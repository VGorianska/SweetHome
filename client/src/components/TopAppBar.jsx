import * as React from 'react';
import { Typography, IconButton, Toolbar, Box, CssBaseline, AppBar, ListItemIcon } from '@mui/material';
import { Search, HandymanOutlined, FeedOutlined, AutoAwesomeMotionOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

export default function Bar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const selectedIndex = location.pathname; 
  const open = Boolean(anchorEl);
  const navigate = useNavigate();


  const handleMenuItemClick = (url) => {
    navigate(url, { replace: true });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Box sx={{ zIndex: 999, flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" open={true}>
        <Toolbar>
                <IconButton
                  size="medium"
                  edge="start"
                  aria-label="open drawer"
                  onClick={menuOpen}
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}>
                  <MenuItem onClick={() => handleMenuItemClick('/')} selected={selectedIndex === '/'}><ListItemIcon><AutoAwesomeMotionOutlined /></ListItemIcon> Pictures</MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick('/experts')} selected={selectedIndex === '/experts'}><ListItemIcon><HandymanOutlined /></ListItemIcon> Experts</MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick('/news')} selected={selectedIndex === '/news'}><ListItemIcon><FeedOutlined /></ListItemIcon> News</MenuItem>
                </Menu>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1 }}
          >
            Sweet Home
          </Typography>
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
          >
            <Search />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

//const Home = () => <div className={styles.page}>Home Page</div>;
