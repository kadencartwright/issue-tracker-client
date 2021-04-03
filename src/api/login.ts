export default class LoginService{
    loginUser: (loginData:IUserLoginData)=>Promise<IAuthenticatedUser> = async ()=>{
        //STUB FUNCTION. 
        //TODO NEED IMPLEMENTATION
        //make api call
        //perform necessary data transformations
        //put in an object implementing IAuthenticatedUser
        return{
            email:'test@test.com',
            bearer: 'superSecretBearerJWT',
            name: 'Test User'
        };
    }
}

export interface IUserLoginData{
    email:String,
    password:String
}
export interface IAuthenticatedUser{
    email:String,
    bearer:String,
    name:String
}
