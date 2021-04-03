import './Login.css'
import LoginService from '../../api/login'
import  React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
export const Login = ()=> {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const handleLogin = async()=>{
        if (!passwordError && !emailError){
            let loginService = new LoginService();
            let userResult = await loginService.loginUser({email:'test',password:'test'})
            console.log(userResult)
        }else{
        }
    }
    const checkEmail:(email:String)=>boolean = function(email:String){
        if (!email || email ==''){
            //if null or empty return false
            return false
        }
        return  !(/\S+@\S+\.\S+/.test(email.toLowerCase()))
    }
    const checkPassword:(password:String)=>boolean = function(password:String){
        if (!password || password ==''){
            //if null or empty return false
            return false
        }
        return !(password.length >=8)
    }
    return(
        <div className="login">
            <form >
                <div className='form-element'>
                    <input 
                        type="text" 
                        className='input-field' 
                        name="username" 
                        placeholder='Email' 
                        onInput={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                        onBlur = {()=>setEmailError(checkEmail(email))}
                    />
                    {emailError && <p className='input-field-error-message'>Invalid email address</p>}

                </div>
                <div className='form-element'>
                    <input
                        type="password" 
                        className='input-field' 
                        name="password" 
                        placeholder='Password'
                        onInput={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                        onBlur = {()=>setPasswordError(checkPassword(password))}
                    />
                    {passwordError && <p className='input-field-error-message'>Invalid password</p>}
                </div>
                <input type="button" value="Login" className='form-element login-button' onClick={handleLogin}/>
            </form>
            <p><Link to='/auth/signup'>Create an account</Link> or <Link to='/auth/reset-password'>Forgot your Password?</Link></p>
        </div>
    )
}
