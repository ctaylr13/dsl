import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Trick List</Button>
                    <Button color="inherit">Practice</Button>
                    <Button color="inherit">Random</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
