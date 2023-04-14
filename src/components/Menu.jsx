import React from 'react'
import './css/Menu.css'
import {NavLink} from 'react-router-dom'
import { FaBeer } from "react-icons/fa";

function Menu() {
  return (
    <div className='container_menu'>
        <nav>
            <NavLink to="" className="opt_menu">Tienda</NavLink>
            <NavLink to="" className="opt_menu">User</NavLink>
            <NavLink to="" className="opt_menu">Carrito</NavLink>
        </nav>
    </div>
  )
}

export default Menu