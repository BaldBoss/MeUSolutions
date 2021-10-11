import React from 'react'
import imgHeader from '../img/logo.png'
import '../css/header.css'


function Header() {
    
    return (
        <div className="header">
            <div className="Container">
                <img src={imgHeader}></img>
            </div>
            
        </div>
    )
}

export default Header
