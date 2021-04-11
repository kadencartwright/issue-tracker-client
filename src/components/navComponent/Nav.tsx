import { useAuth } from '../ProvideAuth'
import {Link} from 'react-router-dom'
import './Nav.css'
import React from 'react'
import {LocationDescriptor} from 'history'
export const Nav = ()=>{
  const auth = useAuth()
  const NavItem = (props:{to:LocationDescriptor, children:React.ReactNode})=> (<li className='nav-list-item' ><Link to={props.to}className='nav-link'>{props.children}</Link></li>) 

  return(
    <nav id='nav-wrapper'>
      <ol id='nav-list'>
      <NavItem to='/me/projects'>My Projects</NavItem>
      <NavItem to='/me/tickets'>My Tickets</NavItem>
      <NavItem to='/dashboard'>Dashboard</NavItem>
      </ol>
    </nav>
  )
}