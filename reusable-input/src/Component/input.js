import React from 'react';
import "../Component/input.css"
const input = ({
    childrent,
    errorLabel =false,
    error = false,
    startIcon = false,
    endIcon = false,
    fullWidth = false,
    multiline = false,
    helperText ='',
    value='',
    size='',
    className='',
    ...props
}) =>{
    const checkfullWidth = fullWidth ? 'fullWidth' : '';
    const checkmultiline = multiline ? 'multiline' : '';
    const checkerror = error ? 'error' : '';
    const checkerrorLabel = errorLabel ? 'errorLabel' : '';
    return(
        <div className="inputwrapper">
            
            <input placeholder="Placeholder" className={`input ${className} ${helperText} ${value} ${size} ${checkerror} ${checkfullWidth} ${checkmultiline}  `}{...props}>

            </input>
            <label className={`standard-label ${checkerrorLabel}`}>{childrent || "Label"}</label>
        </div>
    )
}
export default input