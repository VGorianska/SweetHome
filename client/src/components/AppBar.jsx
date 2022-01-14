import * as React from 'react';
import { Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Input = styled('input')({
  display: 'none',
});

export default function Bar() {
  return (
    <Box sx={{ zIndex: 999, flexGrow: 1 }}>
      <AppBar position="fixed">
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
            sx={{ flexGrow: 1 }}
          >
            Sweet Home
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="inherit" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          </Stack>
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
