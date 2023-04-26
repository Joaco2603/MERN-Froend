import React, { useState } from 'react'
import './css/Menu.css'
import {NavLink} from 'react-router-dom'

function Menu() {

  const [car,setCar] = useState(0);

  return (
    //Links de navegacion
    <div className='container_menu'>
        <nav>
            <NavLink to="/articulos" className="opt_menu">Tienda</NavLink>
            <NavLink to="" className="opt_menu">User</NavLink>
        </nav>
    </div>
  )
}

export default Menu