import React from 'react'
import ReactDOM from 'react-dom'
// import '../../css/index.css'
import Bar from './components/TopAppBar'
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles'
import BottomNavi from './components/BottomNavi'
import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfoundpage from "./components/oops";
import ImgContainer from "./components/MainImgList";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Bar />
        <Container>
          <Routes>
            <Route path="/" element={<ImgContainer />} />
            {/* <Route path="/livingrooms" element={<LivingroomsList />} /> */}
            <Route path='*' element={<Notfoundpage />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <BottomNavi />
    </ThemeProvider>
  </React.StrictMode >,
  document.getElementById('root')
)