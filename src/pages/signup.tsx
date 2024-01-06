import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, DialogContentText, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import { Logo } from '@/components/logo';
import { auth, provider } from '../firebaseConfig'
import { UserCredential, onAuthStateChanged } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import router, { useRouter } from 'next/router';



import { createUserWithEmailAndPassword } from 'firebase/auth';
// export let users: any;
let userName: any;
let userEmail: any;
let userId: any;


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [termCond, settermCond] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [googleEmail, setgoogleEmail] = useState('');

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
    // useEffect(() => {
    //     setgoogleEmail(localStorage.getItem('email'))
    // })

    const handleSignUp = async () => {
        try {

            await createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    const userEmail = data.user.email || '';
                    // Signed in
                    // console.log(users);
                    // alert("Hello " + users.displayName)
                    alert("Sign up successful")
                    localStorage.setItem("email", userEmail);
                    localStorage.setItem("uid", data.user.uid);


                    // navigate("/verify")
                    // ...
                })
            // Handle successful sign-up
        } catch (error) {
            // Handle sign-up errors
            console.error("Error signing up:", error);
        }
    };

    const submitSignup = () => {
        if (email === '' || password === '' || reEnterPassword === '' || reEnterPassword !== password || termCond === false) {
            alert("form filled in incorrect way")

        }
        else {
            handleSignUp();
            handleOpen()

        }
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        // Handle submission logic here
        console.log('Name:', name);
        console.log('Phone:', phone);
        setOpen(false); // Close the dialog after submission
    };
    const signupfunc = () => {
        submitSignup();
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
                        Sign Up to <Logo />
                    </Typography>
                    <form>
                        <Grid item xs={12} justifyContent='center'>
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
                                <TextField label="Re-enter Password" fullWidth type="password" variant="outlined" value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={termCond} onChange={(e) => settermCond(e.target.checked)} />}
                                    label="I agree to the terms and conditions"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth onClick={signupfunc}>
                                    Sign Up
                                </Button>
                            </Grid>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Sign Up</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="phone"
                                        label="Phone No"
                                        type="tel"
                                        fullWidth
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleSubmit} color="primary">
                                        Submit
                                    </Button>
                                </DialogActions>
                            </Dialog>

                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};



export default SignUp;


