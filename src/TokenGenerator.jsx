import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './TokenGenerator.css'
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const TokenGenerator = () => {
  const [age, setAge] = useState('')
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [formValues, setFormValues] = useState({

    blueTokenCount: '',
    bluePrefix: '',
    bluePerRow: '',
    redTokenCount: '',
    redPrefix: '',
    redPerRow: ''

  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = () => {
    if (
      !formValues.blueTokenCount &&
      !formValues.bluePrefix &&
      !formValues.redTokenCount &&
      !formValues.redPrefix
    ) {
      alert('Please enter all required values for generating tokens.');
      return;
    }


    if (
      formValues.bluePrefix && !formValues.blueTokenCount
    ) {
      alert('Please enter the number of blue tokens to proceed.');
      return;
    }

    if (
      formValues.redPrefix && !formValues.redTokenCount
    ) {
      alert('Please enter the number of red tokens to proceed.');
      return;
    }


    const blueArray = Array.from({ length: formValues.blueTokenCount }, (_, i) => `${formValues.bluePrefix}${i + 1}`);
    setBlueTokens(blueArray);


    const redArray = Array.from({ length: formValues.redTokenCount }, (_, i) => `${formValues.redPrefix}${i + 1}`);
    setRedTokens(redArray);
  };

  const handleClear = () => {
    setFormValues({
      blueTokenCount: '',
      bluePrefix: '',
      bluePerRow: '',
      redTokenCount: '',
      redPrefix: '',
      redPerRow: ''
    });
    setBlueTokens([]);
    setRedTokens([]);
  };
  const handleageclick = (event)=>{
setAge(event.target.value)
  }

  return (
    <div className='maincontainer'>
<InputLabel id="age-select-label">Age</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={age}
          onChange={handleageclick}
          label="Age"
          
        >        <MenuItem value={10} default>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>a
      </Select>

      <RadioGroup name="radiogroup" defaultValue="female">
        <FormControlLabel value="female" label="female" control={<Radio />}></FormControlLabel>
        <FormControlLabel value="male" label="male" control={<Radio />}></FormControlLabel>

      </RadioGroup>


      <h3>Tocken Generator Application</h3>
      <Grid container spacing={2} >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>Number of Blue Tokens:</label>
              </Grid>
              <Grid item xs={12}>
                <TextField className='txtfld'
                  name="blueTokenCount"
                  type="number"
                  value={formValues.blueTokenCount}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label>Blue Token Prefix:</label>
              </Grid>
              <Grid item xs={12}>
                <TextField className='txtfld'
                  name="bluePrefix"

                  value={formValues.bluePrefix}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label>Blue Tokens Per Row:</label>
              </Grid>
              <Grid item xs={12}>
                <TextField className='txtfld'
                  name="bluePerRow"
                  type="number"
                  value={formValues.bluePerRow}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>Number of Red Tokens:</label>
              </Grid>
              <Grid item xs={12}>
                <TextField className='txtfld'
                  name="redTokenCount"
                  type="number"
                  value={formValues.redTokenCount}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label>Red Token Prefix:</label>
              </Grid>
              <Grid item xs={12}>
                <TextField className='txtfld'
                  name="redPrefix"

                  value={formValues.redPrefix}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label>Red Tokens Per Row:</label>
              </Grid>
              <Grid item xs={12}>
                <TextField className='txtfld'
                  name="redPerRow"
                  type="number"
                  value={formValues.redPerRow}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>



        <Grid item xs={12}>
          <Button className='custom-button' variant="contained" color="primary" onClick={handleGenerate}>Generate</Button>
          <Button className='custom-button' variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='tokengrid'>
        {blueTokens.map((token, index) => (
          <Grid
            item
            xs={12 / formValues.bluePerRow}
            key={index}
          >
            <Typography className='bluetoken'>{token}</Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} className='tokengrid'>
        {redTokens.map((token, index) => (
          <Grid item xs={formValues.redPerRow && 12 / formValues.redPerRow} key={index}>
            <Typography className='redtoken'>{token}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TokenGenerator;
