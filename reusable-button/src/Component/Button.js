import React from 'react';
import '../Component/style.css'

const Button = ({
    childrent,
    size='',
    color='',
    className='',
    variant='',
    disableShadow = false,
    startIcon =false,
    endIcon = false,
    ...props
}) =>{ 
    //check if got disableshadow then add disableshadow class if not empty
    const checkDisable = disableShadow ? 'disableShadow': '';
    return(
        <div>
            <button className={`btn ${size} ${color} ${className} ${variant} ${checkDisable}`}{...props}>
                {startIcon ? (
                    <span className="material-icons start-icon">{startIcon}</span>
                ) : null}
                {childrent || 'Default'}
                {endIcon ? (
                    <span className="material-icons end-icon">{endIcon}</span>
                ) : null}
            </button>
        </div>
    )
}

export default Button;