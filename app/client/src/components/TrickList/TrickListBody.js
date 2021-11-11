import React from 'react';
import { Box } from '@mui/system';
import { Button, ButtonGroup } from '@mui/material';

const TrickListBody = ({ flatGroundTricks, grindTricks }) => {
    console.log('flatground Tricks', flatGroundTricks);
    console.log('grindTricks', grindTricks);
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonGroup>
                    <Button>Regular</Button>
                    <Button>Fakie</Button>
                    <Button>Nollie</Button>
                    <Button>Switch</Button>
                </ButtonGroup>
            </Box>
            <Box>
                {flatGroundTricks.map((trick) => (
                    <div>{trick.name}</div>
                ))}
            </Box>
        </Box>
    )
}

export default TrickListBody;
