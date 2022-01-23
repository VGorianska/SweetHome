import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom'

const Notfoundpage = () => {
    return(
        <Container sx={{ background: '#dde0e7', padding: 0, m: '60px 0' }}>
            This page does not exist. Go <NavLink to="/">home</NavLink>
        </Container>
    )
}

export default Notfoundpage

