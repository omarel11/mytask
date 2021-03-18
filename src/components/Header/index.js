import React from 'react';
import './styles.scss';
import {Link } from 'react-router-dom';
import {auth} from './../../firebase/utils';

import logo from './../../asserts/logo.jpg';

const Header =props =>{
    const{ currentUser }=props;
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                   <img src={logo} alt="" />
                   </Link>
                </div>
            
            <div className="calltoaction" >
          
                {currentUser && (
                    <ul>
                        <li>
                            <span onClick={()=>auth.signOut()}>
                                Logout
                            </span>
                        </li>
                    </ul>
                )}
               
                {!currentUser && (
                    <ul>
                
                    <li>
                        <Link to="/registration">
                        register
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            login
                        </Link>
                    </li>
                </ul>

                )}
                 
            </div>
            
           </div>

        </header>
    );
};
Header.defaultProps ={
    currentUser:null
};

export default Header;
