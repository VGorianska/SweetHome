import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Visibility, VisibilityOff, Send } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handlechange = (event) => {
    setChecked(event.target.checked);
  };

  const handleMenuItemClick = (url) => {
    navigate(url, { replace: true });
    setAnchorEl(null);
  };

  return (
    <Container sx={{ background: '#dde0e7', padding: 0, m: '90px 0' }}>
      <Box
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        <ValidationTextField
          label="E-mail"
          required
          variant="outlined"
          defaultValue="mustermann@gmail.com"
          id="validation-outlined-input"
        />
        <FormControl variant="outlined" sx={{ mt: '30px' }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button sx={{ width: 90, alignItems: 'center', m: '30px auto' }} variant="contained" endIcon={<Send />} onClick={() => handleMenuItemClick('/')}>
          Send
        </Button>
      </Box>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <div><Typography sx={{ fontSize: 12 }}><Checkbox checked={checked} onChange={handlechange} inputProps={{ 'aria-label': 'controlled' }} />Remember me</Typography></div>
        <div><Button variant="outlined" onClick={() => handleMenuItemClick('/registration')} >Registration</Button></div>
      </Stack>
    </Container>
  )
}