import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MyButton from 'components/ui/MyButton';
import Input from 'components/ui/Input';
import Box from '@mui/material/Box';
import Linkcontainer from 'components/singin/Linkcontainer';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Form = ({ bgcolor, title }) => {
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: bgcolor }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
            <Box
                component="form"
                noValidate
                //onSubmit={handleSubmit}
                sx={{ mt: 1 }}
            >
                <Input
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    type="email"
                />
                <Input
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <MyButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    text="Sign In"
                    color={bgcolor}
                ></MyButton>
                <Linkcontainer color={bgcolor} />
            </Box>
        </>
    );
};

export default Form;
