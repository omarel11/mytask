import React,{Component} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {auth,handleUserProfile } from './firebase/utils';


//layout 
import Mainlayout from './layouts/Mainlayout';
import Homepagelayout from './layouts/Homepagelayout';
//pages
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import './default.scss';

const initialState = {
  currentUser:null
};

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ...initialState
    };
  }

authListener=null;

  componentDidMount(){
    this.authListener=auth.onAuthStateChanged( async userAuth =>{
     if(userAuth){
       const userRef=await handleUserProfile(userAuth);
       userRef.onSnapshot(snapshot=>{
         this.setState({
           currentUser:{
             id :snapshot.id,
             ...snapshot.data()
           }
         })
       })
     }
        
    

      this.setState({
        ...initialState
      });
    });

  }


  componentWillUnmount() {
    this.authListener();

  }
  render(){
    const { currentUser}=this.state;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>(
          <Mainlayout currentUser={currentUser}>
            <Homepage />
          </Mainlayout>
        )} />
        <Route path="/registration" render={() => currentUser ? <Redirect to="/" />:(
          <Mainlayout currentUser={currentUser}>
            <Registration />
          </Mainlayout>

        )} />
        <Route path="/Login"
         render={() =>currentUser ? <Redirect to="/" />:(
          <Mainlayout currentUser={currentUser}>
            <Login />
          </Mainlayout>

        )} />
      </Switch>
    </div>
  );
        }
}

export default App;
