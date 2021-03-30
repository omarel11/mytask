import React,{ useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Link,withRouter} from 'react-router-dom';
 import {signInUser,signInWithGoogle,resetALLAuthforms} from './../../redux/User/user.actions';

import './styles.scss';

import AuthWrapper from './../AuthWrapper'
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const mapState=({ user}) =>({
    signInSuccess:user.signInSuccess
});

const SignIn =props =>{
    const {signInSuccess}=useSelector(mapState);
    const dispatch =useDispatch()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

        useEffect(() =>{
            if(signInSuccess){
                resetForm();
                dispatch(resetALLAuthforms());
                props.history.push('/');

            }
        }, [signInSuccess]);


    const resetForm=() =>{
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(signInUser({email,password}));
    
    }
    const handleGoogleSignIn =() =>{
        dispatch(signInWithGoogle());

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

                 <Button type="submit">
                    LOGIN
                 </Button>

                 <div className="socialSignin">
                     <div className="row">
                     <Button onClick={handleGoogleSignIn}>
                             sign in with google
                         </Button>
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