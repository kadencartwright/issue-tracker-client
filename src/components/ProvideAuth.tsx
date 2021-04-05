
import React, { createContext, ReactNode, useContext, useState } from 'react'
import {loginUser} from '../api/login'
//helper interfaces
export interface IUserLoginData{
    email:String,
    password:String
}
export interface IAuthenticatedUser{
    email:String,
    bearer:String,
    name:String
}


export interface IAuthContext{
    login:(userLoginData:IUserLoginData)=>void,
    logout:()=>void,
    currentUser: IAuthenticatedUser | undefined
}



//create the context
const authContext = createContext<IAuthContext>({} as IAuthContext)
//create the provider function component that wraps the app
interface ProvideAuthProps{
    children:JSX.Element
}
const ProvideAuth = (props:ProvideAuthProps)=>
    (
        <authContext.Provider value={useProvideAuth()}>
            {props.children}
        </authContext.Provider>
    )
//create the public useAuth hook/
export const useAuth:()=> IAuthContext= ()=> useContext(authContext)

// create the useProvideAuth provider hook that is used by the public useAuth hook
const useProvideAuth:()=>IAuthContext = ()=>{
    const [currentUser, setCurrentUser] = useState<IAuthenticatedUser | undefined>()
    const login:(userLoginData:IUserLoginData)=>void = async(userLoginData:IUserLoginData)=>{
        //abstract api call into another file so we can easily stub this for testing
        setCurrentUser(await loginUser(userLoginData))
        console.log(currentUser)
        return
    }
    const logout:()=>void =()=>{
        setCurrentUser(undefined)
        return
    }
    return{
        login,
        logout,
        currentUser
    }
}

export default ProvideAuth
