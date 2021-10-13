import React from 'react';
const input = ({
    childrent,
    errorLabel =false,
    error = false,
    startIcon = false,
    endIcon = false,
    fullWidth = false,
    multiline = false,
    helperText ='',
    value=false,
    size='',
    className='',
    row='',
    ...props
}) =>{
    const checkfullWidth = fullWidth ? 'fullWidth' : '';
    const checkmultiline = multiline ? 'multiline' : '';
    const checkerror = error ? 'error' : '';
    const checkerrorLabel = errorLabel ? 'errorLabel' : '';
    return !multiline ? (
        <div className="inputwrapper">
            {startIcon ? (
                    <span className="material-icons start-icon">{startIcon}</span>
                ) : null}
            {endIcon ? (
                    <span className="material-icons end-icon">{endIcon}</span>
                ) : null}
            <input placeholder="Placeholder" value={value ? value : null}  className={`input ${className}  ${size} ${checkerror} ${checkfullWidth} ${checkmultiline} ${startIcon ? 'input-start' : null} `}{...props}>
            </input>
            <label className={`standard-label ${checkerrorLabel}`}>{childrent || "Label"}</label>
            <p className="helperText">{helperText}</p>
            
        </div>
    ) : (
        <div className="inputwrapper">
            <textarea placeholder="Placeholder" className={`${checkmultiline}`} rows={row}></textarea>
            <label className={`standard-label ${checkerrorLabel}`}>{childrent || "Label"}</label>

        </div>
    )
}
export default input