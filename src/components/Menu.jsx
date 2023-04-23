import React from 'react'
import './css/Menu.css'
import {NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div className='container_menu'>
        <nav>
            <NavLink to="" className="opt_menu">Tienda</NavLink>
            <NavLink to="" className="opt_menu">User</NavLink>
            <NavLink to="" className="opt_menu">Carrito</NavLink>
            <box-icon name="cart" className="opt_menu" id="icon"></box-icon>
            <div id='circle'>0</div>
        </nav>
    </div>
  )
}

export default Menu