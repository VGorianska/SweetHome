import * as React from 'react';
import {Typography, IconButton, Toolbar, Box, AppBar} from '@mui/material';
import {Menu, Search} from '@mui/icons-material';


export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            sx={{ mr: 1 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1}}
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
