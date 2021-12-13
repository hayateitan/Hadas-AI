import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './Budget.css'
const Budget = () => {
  const [budget, setBudget] = React.useState('');
  const handleChange = (event) => {
    setBudget(event.target.value);
  };
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl>
          <InputLabel id="selt">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={budget}
            label="Budget"
            onChange={handleChange}
          >
            <MenuItem value={10}>Budget</MenuItem>
            <MenuItem value={20}>Low</MenuItem>
            <MenuItem value={30}>Standard</MenuItem>
            <MenuItem value={40}>High</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Budget;
