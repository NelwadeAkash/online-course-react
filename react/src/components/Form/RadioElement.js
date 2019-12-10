import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





export default function RadioElement() {
    return (
        <div>
            {/* <input type="radio" value="option1" checked={true} /> */}
        <FormControl>
            <RadioGroup>
            <FormControlLabel
           label="Gender"
           labelPlacement="Gender"
          value="Male"
          control={<Radio color="primary" />}
          value="female"
          control={<Radio color="primary" />}
          
        />
       
        </RadioGroup>
        </FormControl>
        </div>
      );
    }
    
