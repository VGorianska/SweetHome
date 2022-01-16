import * as React from 'react';
import { Typography, IconButton, Toolbar, Box, CssBaseline, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiAppBar from '@mui/material/AppBar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 180;

const titles = {
  "/": 'Sweet Home',
  "/houses": 'Houses',
  "/livingrooms": 'Living Rooms',
  "/bedrooms": 'Bedrooms',
  "/kidsrooms": 'Kidsrooms',
  "/kitchens": 'Kitchens',
  "/diningrooms": 'Diningrooms',
  "/bathrooms": 'Bathrooms',
  "/hallways": 'Hallways',
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const TopAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Bar() {
  let navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === '/'
  console.log(location);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const title = titles[location.pathname] || 'Sweet Home';

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goBack = () => {
    navigate('/')
  }

  return (
    <Box sx={{ zIndex: 999, flexGrow: 1 }}>
      <CssBaseline />
      <TopAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            aria-label="open drawer"
            onClick={isMain ? handleDrawerOpen : goBack}
            color="inherit"
            sx={{ mr: 1, ...(open && { display: 'none' }) }}
          >
            {isMain ? <MenuIcon /> : <ArrowBackIcon />}
          </IconButton>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
          >
            <Search />
          </IconButton>
        </Toolbar>
      </TopAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Send'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open} sx={{ margin: 0, padding: 0 }}>
        <DrawerHeader />

      </Main>
    </Box>

  );
}

//const Home = () => <div className={styles.page}>Home Page</div>;
