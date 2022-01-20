import * as React from 'react';
import { Typography, IconButton, Toolbar, Box, CssBaseline, AppBar, ListItemIcon } from '@mui/material';
import { Search, HandymanOutlined, FeedOutlined, AutoAwesomeMotionOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function Bar() {
  const goBack = () => {
    navigate('/')
  }

  const menuOpen = () => {
  }

  return (
    <Box sx={{ zIndex: 999, flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" open={true}>
        <Toolbar>
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton
            size="medium"
            edge="start"
            aria-label="open drawer"
            onClick= {menuOpen}
            color="inherit"
            sx={{ mr: 1}}
            {...bindTrigger(popupState)}
          >
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><ListItemIcon><AutoAwesomeMotionOutlined /></ListItemIcon> Pictures</MenuItem>
            <MenuItem onClick={popupState.close}><ListItemIcon><HandymanOutlined /></ListItemIcon> Experts</MenuItem>
            <MenuItem onClick={popupState.close}><ListItemIcon><FeedOutlined /></ListItemIcon> News</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState> 
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
