import React from 'react';
import men from './../../asserts/men.jpg';
import wom from './../../asserts/wom.jpg';
import './styles.scss';

const Directory =props =>{
    return(
      <div className="directory">
          <div className="wrap">
          <div 
          className="item"
          style={{
              backgroundImage: `url(${men})`
          }}
               >
                   <a>
                       SHOP MEN
                       </a>
               </div>

          <div
            className="item"
             style={{
                 backgroundImage: `url(${wom})`
             }}
 
          >
              <a> SHOP WOMEN</a>
          </div>
          </div>
      </div>
    );
};

export default Directory;