import React, { useState } from 'react';
import { Box } from '@mui/system';
import ButtonGroup from '@mui/material/ButtonGroup';
import useSWR from 'swr';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TrickListBody from './TrickListBody';

const TrickList = () => {
    const { data: flatGroundTricks } = useSWR('http://localhost:3001/flat');
    const { data: grindTricks } = useSWR('http://localhost:3001/grinds');
    const [trickListType, setTrickListType] = useState('MyTricks')
    let dataExist = false;
    if (flatGroundTricks && grindTricks) {
        dataExist = true;
    }
    if (!dataExist) return <h1>Loading...</h1>;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {trickListType === 'MyTricks' ? <div>My Tricks</div> : <div>All Tricks</div>}
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Flat" />
                </FormGroup>
                {trickListType === 'MyTricks' ?
                    <Button variant="contained" onClick={() => setTrickListType('AllTricks')}>All Tricks</Button>
                    :
                    <Button variant="contained" onClick={() => setTrickListType('MyTricks')}>My Tricks</Button>
                }

            </Box>
            <Box>
                <TrickListBody flatGroundTricks={flatGroundTricks} grindTricks={grindTricks} />
            </Box>
        </Box>
    )
}

export default TrickList
