import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, IconButton, Toolbar, Box, CssBaseline, AppBar, ListItemIcon } from '@mui/material';
import { Search, HandymanOutlined, FeedOutlined, AutoAwesomeMotionOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Bar = props => {
  const { history } = props

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = pageURL => {
    history.push(pageURL)
    setAnchorEl(null);
  };

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
                  onClick={menuOpen}
                  color="inherit"
                  sx={{ mr: 1 }}
                  {...bindTrigger(popupState)}
                >
                  <MenuIcon />
                </IconButton>
                <Menu {...bindMenu(popupState)}
                open={open}
                onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => {handleMenuClick('./')}}><ListItemIcon><AutoAwesomeMotionOutlined /></ListItemIcon> Pictures</MenuItem>
                  <MenuItem onClick={() => {handleMenuClick('./experts')}}><ListItemIcon><HandymanOutlined /></ListItemIcon> Experts</MenuItem>
                  <MenuItem onClick={() => {handleMenuClick('./news')}}><ListItemIcon><FeedOutlined /></ListItemIcon> News</MenuItem>
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

export default withRouter(Bar)