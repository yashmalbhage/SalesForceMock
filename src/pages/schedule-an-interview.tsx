// components/InterviewForm.js
import * as React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import UpcomingInterviews from './upcomin-inter';
import Navbar from './newnav';
import { Footer } from '@/components/footer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

import { TextField, Button, FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme, Typography } from '@mui/material';

const InterviewForm = () => {

    let userName = ''
    let userId = ''
    let userEmail = '';

    if (typeof window !== 'undefined') {
        userName = localStorage.getItem('name') || '';
        userId = localStorage.getItem('uid') || '';
        userEmail = localStorage.getItem('email') || '';
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
    console.log(userName)
    const [name, setName] = useState(userName);
    const [phoneNo, setPhoneNo] = useState('');
    const [experience, setExperience] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState(userEmail);
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNoChange = (event) => {
        setPhoneNo(event.target.value);
    };

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    const handleEmaileChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission
        // console.log({ name, phoneNo, experience, date, time });
        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, name, email, phoneNo, experience, date, time }),
            });

            const data = await response.json();
            console.log(data);
            // Add routing logic here
            // router.push('/new-page');
        } catch (error) {
            console.error('Error:', error);
        }


        // ...






    };

    useEffect(() => {
        const fetchUpcoming = async () => {
            const respone = await fetch(`/api/hello?userId=${email}`);


        }
        fetchUpcoming()
    }, [email]);

    return (

        <div>
            <Navbar />


            <ThemeProvider theme={theme} >
                <Typography variant="h4" align="center" gutterBottom sx={{ margin: 7, color: 'blue' }}>
                    Hello, {userName}!
                </Typography>



                <ThemeProvider theme={theme}>

                    <Typography variant="h6" align="center" gutterBottom sx={{ margin: 7, color: 'primary' }}>
                        Schedule a mock interview by filling the below form
                    </Typography>




                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <form onSubmit={handleSubmit}>
                                <TextField label="Name" value={name} onChange={handleNameChange} fullWidth required margin="normal" />
                                <TextField label="Email" value={email} onChange={handleEmaileChange} fullWidth required margin="normal" />
                                <TextField label="Phone Number" value={phoneNo} onChange={handlePhoneNoChange} fullWidth required margin="normal" />
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Interview for</InputLabel>
                                    <Select value={experience} onChange={handleExperienceChange} required>
                                        <MenuItem value="Beginner">Salesforce developer (2 years exp)</MenuItem>
                                        <MenuItem value="Intermediate">Salesforce developer (3-5) </MenuItem>
                                        <MenuItem value="Expert">Salesforce developer (5+)</MenuItem>
                                        <MenuItem value="Expert">Lead developer</MenuItem>
                                        <MenuItem value="Expert">Salesforce architect</MenuItem>
                                        <MenuItem value="Expert">Vlocity developer</MenuItem>
                                        <MenuItem value="Expert">Omnistudio devloper</MenuItem>
                                        <MenuItem value="Expert">Salesforce tester</MenuItem>


                                    </Select>
                                </FormControl>
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                                <TextField
                                    id="time"
                                    label="Time"
                                    type="time"
                                    value={time}
                                    onChange={handleTimeChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                                <Button type="submit" variant="contained" fullWidth>
                                    Submit
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </ThemeProvider>

            </ThemeProvider>
            <hr></hr>
            <Footer />

        </div>



    );
};

export default InterviewForm;
