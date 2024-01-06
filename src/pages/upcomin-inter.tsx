// pages/upcoming-interviews.js
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { Padding } from '@mui/icons-material';

// // Replace with your API request logic to get upcoming interviews for the user
// let userEmail: string;
// let userrEmail: string;


// if (typeof window !== 'undefined') {
//     userEmail = localStorage.getItem('email');

// }
// console.log(userEmail)

const UpcomingInterviews = () => {


    //     const [interviews, setInterviews] = useState([]);

    //     useEffect(() => {
    //         fetch(`/api/hello?userEmail=${userEmail}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 setInterviews(data);

    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //             });
    //     }, [userEmail]);

    return (
        <div >
            {/* <Grid sx={{ padding: 4 }}>
                <h2>Your Upcoming Interviews</h2>
                <TableContainer component={Paper}  >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Interview Type</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    { }
                                </TableCell>
                                <TableCell align="right">{ }</TableCell>
                                <TableCell align="right">{ }</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid> */}
        </div>
    );
};

export default UpcomingInterviews;
