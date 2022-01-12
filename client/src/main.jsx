import React from 'react'
import ReactDOM from 'react-dom'
// import '../../css/index.css'
import Bar from './components/AppBar'
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles'
import MainMenu from './components/MainMenu'
import RoomsImageList from './components/Rooms'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Bar />
      <RoomsImageList />
      <MainMenu />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)