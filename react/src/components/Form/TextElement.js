import React from 'react'
import { TextField } from '@material-ui/core'

function TextElement(props) {
    return (
        <div>
            <TextField name={props.name} label={props.label} type={props.type} ></TextField>
        </div>
    )
}

export default TextElement
