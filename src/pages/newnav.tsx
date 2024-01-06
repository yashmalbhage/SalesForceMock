// components/Navbar.js
import React from 'react';
import { Logo } from '@/components/logo';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ background: 'white' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }} >
                    <Logo />
                </Typography>

                <Typography variant="h6" component="div" sx={{ color: 'black' }}>
                    Contact
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
