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
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

const Input = styled('input')({
    display: 'none',
});

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

export default function Registration() {

    const [anchorEl, setAnchorEl] = React.useState(null);
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

    const handleMenuItemClick = (url) => {
        navigate(url, { replace: true });
        setAnchorEl(null);
      };

    const [checked, setChecked] = React.useState(true);

    const handlechange = (event) => {
        setChecked(event.target.checked);
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
                    helperText="Enter your E-mail"
                    required
                    variant="outlined"
                    defaultValue="mustermann@gmail.com"
                    id="validation-outlined-input"
                />
                <FormControl variant="outlined" sx={{ mt: '10px' }}>
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
                
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="outlined" component="span">
                            Upload Avatar-Photo
                        </Button>
                    </label>
                    <Avatar />
                </Stack>
                <Button sx={{ alignItems: 'center', m: '30px auto' }} variant="contained" endIcon={<Send />} onClick={() => location = "/"}>
                    Register
                </Button>
            </Box>
            <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                <div><Typography sx={{ fontSize: 12 }}><Checkbox checked={checked} onChange={handlechange} inputProps={{ 'aria-label': 'controlled' }} />Remember me</Typography></div>
                <div><Button variant="outlined" onClick={() => handleMenuItemClick('/')}>Cancel</Button></div>
            </Stack>
        </Container>
    )
}