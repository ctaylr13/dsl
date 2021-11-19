import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';

const Session = () => {
    const { data: flatGroundTricks } = useSWR('http://localhost:3001/flat');
    const { data: grindTricks } = useSWR('http://localhost:3001/grinds');
    const trickTypeArray = ['flat', 'grind', 'line',];
    const [trickType, setTrickType] = useState();
    const [trickNumber, setTrickNumber] = useState(1);
    const [activeSession, setActiveSession] = useState(false);
    const [selectedTricks, setSelectedTricks] = useState(null);

    let dataExist = false;
    if (flatGroundTricks && grindTricks) {
        dataExist = true;
    }
    if (!dataExist) return <h1>Loading...</h1>;

    const flatGroundArray = [];
    const allTricks = [];
    for (let i = 0; i < flatGroundTricks.length; i += 1) {
        if (flatGroundTricks[i].mytrick === 'true') {
            flatGroundArray.push(flatGroundTricks[i].name);
            allTricks.push(flatGroundTricks[i].name);
        }

    }
    const grindTricksArray = [];
    for (let i = 0; i < grindTricks.length; i += 1) {
        if (grindTricks[i].mytrick === 'true') {
            grindTricksArray.push(grindTricks[i].name);
            allTricks.push(grindTricks[i].name);
        }
    }

    // console.log('alltricks', allTricks);

    const startSession = () => {
        setActiveSession(!activeSession)
        setSelectedTricks(createRandomTrick(trickType));
    };

    const createRandomTrick = (trickType) => {
        const randomArray = [];
        if (trickType === trickTypeArray[0]) {
            for (let i = 0; i < trickNumber; i += 1) {
                const randomIndex = Math.floor(Math.random() * flatGroundTricks.length);
                randomArray.push(flatGroundArray[randomIndex]);
            }
            return randomArray;
        }
        if (trickType === trickTypeArray[1]) {
            for (let i = 0; i < trickNumber; i += 1) {
                const randomIndex = Math.floor(Math.random() * grindTricks.length);
                randomArray.push(grindTricksArray[randomIndex]);
            }
            return randomArray;
        }
        if (trickType === trickTypeArray[2]) {
            for (let i = 0; i < trickNumber; i += 1) {
                const randomIndex = Math.floor(Math.random() * allTricks.length);
                randomArray.push(allTricks[randomIndex]);
            }
            return randomArray;
        }

    };

    const TrickBody = ({ tricks }) => {
        return (
            <div>
                {tricks.map((trick) => (
                    <div style={{ color: 'white', font: '16px' }} key={uuidv4()}>{trick}</div>
                ))}

            </div>
        );
    }


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', gap: '10px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                <div>Number of Tricks:</div>
                <TextField
                    sx={{ backgroundColor: 'white' }}
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={trickNumber}
                    onChange={(event) => setTrickNumber(event.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                        onClick={() => setTrickType(trickTypeArray[0])}
                        variant={trickType === 'flat' ? 'outlined' : 'contained'}
                    >
                        Flat Only
                    </Button>
                    <Button
                        onClick={() => setTrickType(trickTypeArray[1])}
                        variant={trickType === 'grind' ? 'outlined' : 'contained'}
                    >
                        Grinds Only
                    </Button>
                    <Button
                        variant={trickType === 'line' ? 'outlined' : 'contained'}
                        onClick={() => setTrickType(trickTypeArray[2])}
                    >
                        Line
                    </Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    sx={{ width: '310px' }}
                    variant={activeSession === true ? 'outlined' : 'contained'}
                    onClick={() => startSession()}
                >
                    Start
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {activeSession ?
                    <div>
                        <TrickBody tricks={selectedTricks} />
                        <Button sx={{ right: '9px' }} onClick={() => setSelectedTricks(createRandomTrick(trickType))}>New Trick</Button>
                    </div>
                    :
                    null
                }
            </Box>
        </Box>

    );
}

export default Session;
