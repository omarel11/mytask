import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.scss';
import Buttons from './../Forms/Button';
import {signInWithGoogle,auth} from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper'
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
        const {email,password} =this.state;

        const configAuthWrapper = {
            headline : 'LogIn'

        };

    return(
     <AuthWrapper {...configAuthWrapper}>
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

                 <Buttons type="submit">
                    LOGIN
                 </Buttons>

                 <div className="socialSignin">
                     <div className="row">
                     <Buttons onClick={signInWithGoogle}>
                             sign in with google
                         </Buttons>
                     </div>
                 </div>
                 <div className="links">
                     <Link to="/recovery">
                         Reset Password
                     </Link>
                 </div>
                 </form> 
            </div>
        </AuthWrapper>
    );
    }
}

export default SignIn;