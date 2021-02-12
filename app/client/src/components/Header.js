import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
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
        </div>
    );
}
