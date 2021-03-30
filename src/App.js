import React,{useEffect} from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {Switch, Route,Redirect} from 'react-router-dom';
import {auth,handleUserProfile } from './firebase/utils';
import {setCurrentUser} from './redux/User/user.actions';

//hoc
import WithAuth from './hoc/withAuth';
//layout 
import Mainlayout from './layouts/Mainlayout';
import Homepagelayout from './layouts/Homepagelayout';
//pages
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import './default.scss';

const App =props =>{
  const dispatch=useDispatch();

useEffect(()=>{
    const authListener=auth.onAuthStateChanged( async userAuth =>{
     if(userAuth){
       const userRef=await handleUserProfile(userAuth);
       userRef.onSnapshot(snapshot=>{
         dispatch(setCurrentUser({
           id:snapshot.id,
           ...snapshot.data()
           
       }));
       })
      }
     dispatch(setCurrentUser(userAuth));
    });
  
  return() =>{
    authListener();
     
  };
}, []);

            

  




  return(
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>(
          <Mainlayout >
            <Homepage />
          </Mainlayout>
        )} />
        <Route path="/registration" render={() => (
          <Mainlayout >
            <Registration />
          </Mainlayout>

        )} />
        <Route path="/Login"
         render={() =>(
          <Mainlayout >
            <Login />
          </Mainlayout>

        )} />
        <Route path="/recovery" render={()=>(
          <Mainlayout>
            <Recovery />
          </Mainlayout>
        )} />
        <Route path="/dashboard" render={()=>(
          <WithAuth>
          <Mainlayout>
            <Dashboard />
          </Mainlayout>
          </WithAuth>
        )} />
      </Switch>
    </div>
 );
        }





export default App;
