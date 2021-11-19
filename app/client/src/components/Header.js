import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/list">
                        <Button color="inherit">Trick List</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="random">
                        <Button color="inherit">Session</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
