import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Welcome Back, Brooklyn!</h1>
                <Link to="/list/all">
                    <Button>All Tricks</Button>
                </Link>
                <Link to="/list/my">
                    <Button>My Tricks</Button>
                </Link>
                <Link to="/practice/log">
                    <Button>Session Log</Button>
                </Link>
            </Box>
        );
    }
}

export default Home;