import React from 'react'
import ReactDOM from 'react-dom'
// import '../../css/index.css'
import Bar from './components/AppBar'
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles'
import MainMenu from './components/MainMenu'
import HomePageIconList from './components/HomePage'
import { Container, CssBaseline, GlobalStyles } from '@mui/material'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Notfoundpage from "./components/oops";
import BedroomsList from './components/rooms/bedrooms';
import LivingroomsList from './components/rooms/livingRooms'
import BathroomsList from './components/rooms/bathrooms'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            background: '#dde0e7'
          }
        }}
      />
      <Bar />
      <Container sx={{ p: '45px 0' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< HomePageIconList />} />
            <Route path="/bedrooms" element={<BedroomsList />} />
            <Route path="/livingrooms" element={<LivingroomsList />} />
            <Route path="/Bathrooms" element={<BathroomsList />} />
            <Route path='*' element={<Notfoundpage />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <MainMenu />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)