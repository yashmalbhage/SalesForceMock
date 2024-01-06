import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Logo } from '@/components/logo';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from '../firebaseConfig'

import { signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/router';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [googleEmail, setgoogleEmail] = useState('');
    const router = useRouter();


    const signing = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                const userEmail = data.user.email || ''; // handle the possibility of null
                const displayName = data.user.displayName ?? '';
                const uid = data.user.uid ?? '';
                setgoogleEmail(userEmail);
                localStorage.setItem("email", userEmail);
                localStorage.setItem("name", displayName);
                localStorage.setItem('uid', uid);
                console.log(data.user.uid);
                router.push('/schedule-an-interview');
            })
            .catch((error) => {
                console.log("Error signing in with Google:", error.message);
            });
    };
    useEffect(() => {
        setgoogleEmail(localStorage.getItem('email') || ''); // handle the possibility of null
    }, []);



    const onLogin = () => {
        // e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // navigate("/home");
                console.log(user);
                console.log('user exist')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };


    const submitSignup = () => {
        if (email === '' || password === '') {
            alert("form filled in incorrect way")

        }
        else {
            alert(email)
            onLogin();
            router.push('/login');
        }
    }

    const theme: any = createTheme({
        palette: {
            primary: {
                main: '#0000FF',
            },
            secondary: {
                main: '#8B0000'
            }
        },
    });
    return (

        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" style={{ marginTop: '2rem' }} >
                <Grid item xs={10} sm={6} md={4}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Log in to <Logo />
                    </Typography>
                    <form>
                        <Grid item xs={12}>
                            <Button style={{ width: 200 }} onClick={signing}  >
                                <img src="/images/google-removebg-preview.png" alt="Headline curve" style={{ width: 200 }} />

                            </Button>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography align='center'>or</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Email Address" fullWidth variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Password" fullWidth type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth onClick={submitSignup}>
                                    Log in
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Login;
