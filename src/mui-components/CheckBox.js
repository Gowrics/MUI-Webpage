import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Fab, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const CheckBox = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
<Fab size="small" color="secondary" aria-label="add">
  <AddIcon />
</Fab>
<Fab size="medium" color="secondary" aria-label="add">
  <AddIcon />
</Fab>
<Fab color="secondary" aria-label="add">
  <AddIcon />
</Fab>
<br></br><br></br>

<FormControl >
  <FormLabel  id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
  row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="  radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
<hr></hr>
<FormControl halfWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    <MenuItem value={""}> none</MenuItem>

  </Select>
</FormControl>
   </div>
  ) 
}
export default CheckBox