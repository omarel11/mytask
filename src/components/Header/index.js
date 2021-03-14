import React from 'react';
import './styles.scss';
import {Link } from 'react-router-dom';

import logo from './../../asserts/logo.jpg';

const Header =props =>{
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                   <img src={logo} alt="" />
                   </Link>
                </div>
            
            <div className="calltoaction">
                <ul>
                    <li>
                        <Link to="/registration">
                        Registre
                        </Link>

                    </li>
                </ul>

            </div>
            </div>

        </header>
    );
};

export default Header;
