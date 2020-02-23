import React from 'react';
import Logo from '../../Assets/Images/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
           <img src={Logo} alt="Logo"></img> 
        </div>
    )
}

export default logo;
