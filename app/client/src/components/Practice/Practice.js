import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export class Practice extends Component {
    render() {
        return (
            <div>
                <Link to="/practice/new">
                    <Button>New Session</Button>
                </Link>
                <Link to="/practice/routine/new">
                    <Button>New Routine</Button>
                </Link>
                <Link to="/practice/log">
                    <Button>Session Log</Button>
                </Link>
            </div>
        )
    }
}

export default Practice;
