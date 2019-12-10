import React from 'react'
import TextField from '@material-ui/core/TextField';

function InputElement(props) {

    return (
        <div>
            {/* <input name={props.name} type={props.type}/> */}
            <TextField label={props.label} name={props.name} type={props.type} 
            onChange={props.onChange} variant="outlined"
            onBlur={props.onBlur}
            ></TextField>
        </div>
    )
}

export default InputElement
