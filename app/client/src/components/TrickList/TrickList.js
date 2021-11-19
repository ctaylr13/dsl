import React, { useState } from 'react';
import { Box } from '@mui/system';
import useSWR from 'swr';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import TrickListBody from './TrickListBody';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const TrickList = () => {
    const { data: flatGroundTricks } = useSWR('http://localhost:3001/flat');
    const { data: grindTricks } = useSWR('http://localhost:3001/grinds');
    const [isFlat, setIsFlat] = useState(true);

    let dataExist = false;
    if (flatGroundTricks && grindTricks) {
        dataExist = true;
    }
    if (!dataExist) return <h1>Loading...</h1>;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '10px' }}>
                <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Typography>Grinds</Typography>
                        <Switch defaultChecked onChange={() => setIsFlat(!isFlat)} />
                        <Typography>Flat</Typography>
                    </Stack>
                </FormGroup>

            </Box>
            <Box>
                <TrickListBody flatGroundTricks={flatGroundTricks} grindTricks={grindTricks} isFlat={isFlat} />
            </Box>
        </Box>
    )
}

export default TrickList
