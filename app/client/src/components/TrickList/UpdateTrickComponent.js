
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

const UpdateTrickComponent = ({ trick, type }) => {
  const [myTrick, setMyTrick] = useState(trick.mytrick);
  const updateFlatGround = (event) => {
    setMyTrick(event.target.value);
    updateMyTrick(event.target.value);
  };

  const updateMyTrick = (value) => {
    const data = {
      id: trick.id,
      name: trick.name,
      mytrick: value,
    }
    axios.put(`http://localhost:3001/${type}/${trick.id}`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }



  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px', padding: '5px', width: '200px', }}>
      <div key={trick.id}>{trick.name}</div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControl>
          <Select sx={{ height: '30px' }} key={trick.id} defaultValue={myTrick} onChange={updateFlatGround} value={myTrick} >
            <MenuItem value={trick.mytrick}>{trick.mytrick}</MenuItem>
            {trick.mytrick === 'true' ? <MenuItem value={'false'}>false</MenuItem> : <MenuItem value={'true'}>true</MenuItem>}
          </Select>
        </FormControl>
        {/* <Button sx={{ height: '30px' }} variant="outlined" onClick={() => updateMyTrick()}>Save</Button> */}

      </Box>

    </Box>

  );

}

export default UpdateTrickComponent;