import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, Star, Search, AccountCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


export default function BottomNavi() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const selectedIndex = location.pathname;
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuItemClick = (url) => {
    navigate(url, { replace: true });
    setAnchorEl(null);
  };

  return (
    <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0 }} value={location.pathname} onChange={handleChange}>
      <BottomNavigationAction
        onClick={() => handleMenuItemClick('/')} 
        label="Home"
        value="/"
        icon={<Home sx={{ fontSize: '2rem' }} />}
        sx={{ mr: '1px' }}
      />
      <BottomNavigationAction
        onClick={() => handleMenuItemClick('/search')} 
        label="Search"
        value="/search"
        icon={<Search sx={{ fontSize: '2rem' }} />}
      />
      <BottomNavigationAction
        onClick={() => handleMenuItemClick('/favourites')} 
        label="Favourites"
        value="/favourites"
        icon={<Star sx={{ fontSize: '2rem' }} />}
      />
      <BottomNavigationAction
        onClick={() => handleMenuItemClick('/account')} 
        label="Account"
        value="/account"
        icon={<AccountCircle sx={{ fontSize: '2rem' }} />} />
    </BottomNavigation>
  );
}
