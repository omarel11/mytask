import React from 'react';
import './styles.scss';
import logo from './../../asserts/logo.jpg';

const Header =props =>{
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                   <img src={logo} alt="" />
                </div>
            </div>

        </header>
    );
};

export default Header;
