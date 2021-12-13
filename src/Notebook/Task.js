import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Task.css";
const Task = () => {
  const [task, setTask] = React.useState('');
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl>
          <InputLabel id="selt">Task</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task}
            label="Task"
            onChange={handleChange}
          >
            <MenuItem value={10}>Predict</MenuItem>
            <MenuItem value={20}>Explain</MenuItem>
            <MenuItem value={30}>Select</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Task;
