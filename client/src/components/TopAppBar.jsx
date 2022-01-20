import * as React from 'react';
import { Typography, IconButton, Toolbar, Box, CssBaseline, AppBar } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import SettingsIcon from '@mui/icons-material/Settings';



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
            sx={{ mr: 1git }}
            {...bindTrigger(popupState)}
          >
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
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
