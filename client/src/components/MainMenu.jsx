import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {LocationOn, Favorite, Restore, Folder} from '@mui/icons-material';

export default function MainMenu() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<Restore />}
        sx={{ mr: '1px' }}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOn />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
    </BottomNavigation>
  );
}
