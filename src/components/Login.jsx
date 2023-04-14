import React from 'react'
import './css/Login.css'
import {NavLink} from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
        <h3 className='titles_input'>Correo:</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Contraña:</h3>
        <input type="text" className='input_text'/>
        <button className='send'>Registrarse</button>
        <div>
        <NavLink to="/">Crear una cuenta</NavLink>
        </div>
    </div>
  )
}

export default Login