import React,{ useState } from 'react';
import {Link,withRouter} from 'react-router-dom';
import './styles.scss';
import Buttons from './../Forms/Button';
import {signInWithGoogle,auth} from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper'
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const SignIn =props =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const resetForm=() =>{
        setEmail('');
        setPassword('');
    };

    const handleSubmit =async e =>{
        e.preventDefault();
      
        try{
  
await auth.signInWithEmailAndPassword(email,password);
resetForm();
props.history.push('/');

        }catch(err){
            //
        }
    }


    

        const configAuthWrapper = {
            headline : 'LogIn'

        };

    return(
     <AuthWrapper {...configAuthWrapper}>
          <div className="formWrap">
             <form onSubmit={handleSubmit}>

                  <FormInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  handleChange={e =>setEmail(e.target.value)}
/>


<FormInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  handleChange={e =>setPassword(e.target.value)}
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

export default withRouter(SignIn);