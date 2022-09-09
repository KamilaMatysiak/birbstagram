import React, { useState } from 'react'
import {Avatar, Button, Grid, Typography, Container, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from './utils';

import Input from './Input';

const Auth = () => {
    const style = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false);
    };

    const handleSubmit = () => {};
    const handleChange = () => {};
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
            <Container component="main" maxWidth="xs">
                <Paper className={style.paper} elevation={3}>
                    <Avatar className={style.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5">
                        {isSignUp ? 'Sign Up' : 'Sign in'}
                    </Typography>
                    <form className={style.form} onSubmit={handleSubmit}>
                        {isSignUp
                            ? <></>
                            : <Grid container justifyContent='center' alignItems='center' direction='column'>
                                <GoogleLogin
                                    onSuccess={(res) => createOrGetUser(res)}
                                    onError={(res) => console.log(res)}/>
                                <p className={style.or}>OR</p>
                              </Grid>
                            }
                        <Grid container spacing={2}>

                            {isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus={true} half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="emailAddress" label="Email Address" handleChange={handleChange} type='email'/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : "password"} handleShowPassword={handleShowPassword}/>
                            {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={style.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                       
                        <Grid container justifyContent='center'>
                            <Grid item>
                                <Button className={style.switchButton} size="small" fullWidth variant="text" onClick={switchMode}>
                                    {isSignUp
                                    ? 'Already have an account? Sign in!'
                                    : "Don't have an account? Sign up!"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </GoogleOAuthProvider>
    )
}

export default Auth