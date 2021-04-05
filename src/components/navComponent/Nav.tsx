import { useAuth } from '../ProvideAuth'
import {useHistory} from 'react-router-dom'
import './Nav.css'

export const Nav = ()=>{
    const auth = useAuth()
    const history = useHistory()
    // the handlers to pass into our conditionally rendered ReactNode for login/logout nav elements
    const loginHandler = ()=>{
        history.push('/login')
    }
    const logoutHandler = ()=>{
        auth.logout()
        return
    }
    const loginControlButton= (props:{text:string,handler:()=>void})=>{
        return (<li onClick={props.handler}>{props.text}</li>)
    }

    return(
        <nav id='nav-wrapper'>

            <ol id='nav-list'>
                <li className='nav-list-item'><p>Projects</p></li>
                <li className='nav-list-item'><p>Tickets</p></li>
                <li className='nav-list-item'><p>Dashboard</p></li>
                {
                auth.currentUser ? 
                loginControlButton({text:'Log out', handler:logoutHandler})
                : 
                loginControlButton({text:'Login', handler: loginHandler})
                }
            </ol>
           <p>{auth.currentUser?.bearer}</p>
        </nav>
    )
}