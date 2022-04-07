import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './home.css';

const Home = () => {
    const [sport, setSport] = useState('');

    const handleChange = (SelectChangeEvent) => {
        setSport(SelectChangeEvent.target.value);
    };

    return (
        <div className="dash">
            <h3 className="topple">Book a Slot</h3>
            <Box sx={{ minWidth: 120 }}>
                <FormControl className="form">
                    <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sport}
                        label="Sport"
                        onChange={handleChange}
                    >
                        <MenuItem value={'basketball'}>Basketball</MenuItem>
                        <MenuItem value={'badminton'}>Badminton</MenuItem>
                        <MenuItem value={'cricket'}>Cricket</MenuItem>
                        <MenuItem value={'football'}>Football</MenuItem>
                        <MenuItem value={'tt'}>Table Tennis</MenuItem>
                        <MenuItem value={'tennis'}>Tennis</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default Home;
