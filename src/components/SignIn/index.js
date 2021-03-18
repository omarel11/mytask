import React,{ Component } from 'react';
import './styles.scss';
import Buttons from './../Forms/Button';
import {signInWithGoogle,auth} from './../../firebase/utils';

import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const initialState={
    email:'',
    password:''

};

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            ...initialState
        };
        this.hadleChange=this.hadleChange.bind(this);
    }



    hadleChange(e){
      const{name,value}=e.target;
      this.setState({
          [name]:value
      }); 
    }

    handleSubmit =async e =>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
  
await auth.signInWithEmailAndPassword(email,password);
this.setState({
    ...initialState
});


        }catch(err){
            //
        }
    }


    render(){
const {email,password}=this.state;


    return(
        <div className="signin">
      <div className="wrap">
          <h2> login </h2>

          <div className="formWrap">
             <form onSubmit={this.handleSubmit}>

                  <FormInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  handleChange={this.hadleChange}
/>


<FormInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  handleChange={this.hadleChange}
/>

                 <Button type="submit">
                    LOGIN
                 </Button>

                 <div className="socialSignin">
                     <div className="row">
                     <Buttons onClick={signInWithGoogle}>
                             sign in with google
                         </Buttons>
                     </div>
                 </div>
                 </form> 

          </div>
      </div>
            </div>
    );
    }
}

export default SignIn;