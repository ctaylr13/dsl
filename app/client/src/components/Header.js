import React, { Component } from 'react';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/list">
                        <Button color="inherit">Trick List</Button>
                    </Link>
                    <Link to="/practice">
                        <Button color="inherit">Practice</Button>
                    </Link>
                    <Link to="random">
                        <Button color="inherit">Random</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
