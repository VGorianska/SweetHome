import React from 'react'
import ReactDOM from 'react-dom'
// import '../../css/index.css'
import Bar from './components/TopAppBar'
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles'
import BottomNavi from './components/BottomNavi'
import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import ImgContainer from "./components/MainImgList";
import Experts from "./components/Experts";
import News from "./components/News";
import Login from "./components/Login";
import Article from "./components/Article";
import Registration from "./components/Registration"
import Favourites from "./components/Favourites";
import SearchFun from "./components/Search";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Bar />
        <Container>
          <Routes>
            <Route path="/" element={<ImgContainer />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news/:article" element={<Article />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/search" element={<SearchFun />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        <BottomNavi />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode >,
  document.getElementById('root')
)