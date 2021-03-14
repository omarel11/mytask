import React from 'react';
import {Switch, Route} from 'react-router-dom'

//layout 
import Mainlayout from './layouts/Mainlayout';
import Homepagelayout from './layouts/Homepagelayout';
//pages
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>(
          <Mainlayout>
            <Homepage />
          </Mainlayout>
        )} />
        <Route path="/registration" render={() =>(
          <Mainlayout>
            <Registration />
          </Mainlayout>

        )} />
      </Switch>
    </div>
  );
}

export default App;
