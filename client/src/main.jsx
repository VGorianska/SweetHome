import React from 'react'
import ReactDOM from 'react-dom'
// import '../../css/index.css'
import Bar from './components/TopAppBar'
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles'
import MainMenu from './components/MainMenu'
import HomePageIconList from './components/HomePage'
import { Container, CssBaseline, GlobalStyles } from '@mui/material'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HousesList from './components/rooms/houses'
import LivingroomsList from './components/rooms/livingRooms'
import BedroomsList from './components/rooms/bedrooms';
import KidsroomsList from './components/rooms/kidsrooms'
import KitchensList from './components/rooms/kitchens'
import DiningsRoomsList from './components/rooms/diningrooms'
import BathroomsList from './components/rooms/bathrooms'
import HallwaysList from './components/rooms/hallways'
import Notfoundpage from "./components/oops";

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
            <Route path="/houses" element={< HousesList />} />
            <Route path="/livingrooms" element={<LivingroomsList />} />
            <Route path="/bedrooms" element={<BedroomsList />} />
            <Route path="/kidsrooms" element={<KidsroomsList />} />
            <Route path="/kitchens" element={<KitchensList />} />
            <Route path="/diningrooms" element={<DiningsRoomsList />} />
            <Route path="/bathrooms" element={<BathroomsList />} />
            <Route path="/hallways" element={<HallwaysList />} />
            <Route path='*' element={<Notfoundpage />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <MainMenu />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)