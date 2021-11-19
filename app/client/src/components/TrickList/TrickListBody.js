import { Box } from '@mui/system';
import UpdateTrickComponent from './UpdateTrickComponent';

const TrickListBody = ({ flatGroundTricks, isFlat, grindTricks }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '80vh', }}>
                {isFlat === true ?
                    flatGroundTricks.map((trick) => (
                        <UpdateTrickComponent trick={trick} type='flat' />

                    ))
                    : grindTricks.map((trick) => (
                        <UpdateTrickComponent trick={trick} type='grinds' />
                    ))
                }
            </Box>
        </Box>
    )
}

export default TrickListBody;
