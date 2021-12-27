import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import './Filterdate.css'
const FilterDate = ({OnDateChanged}) => {

    const [value, setValue] = React.useState([null, null]);

    const onValueChanged = (newValue) => {
        setValue(newValue);
        OnDateChanged(newValue)
      }

    return (
        <div id="filterdateblock">


            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <Stack spacing={3}>

                    <DesktopDateRangePicker
                        startText=" Start"
                        value={value}
                        onChange={onValueChanged}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} id="datestart" />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} id="dateend" />
                            </React.Fragment>
                        )}
                    />
                </Stack>
            </LocalizationProvider>
        </div>
    )
}

export default FilterDate
