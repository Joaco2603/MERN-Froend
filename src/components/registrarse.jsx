import React from 'react'
import './css/Login.css'
import {NavLink} from 'react-router-dom'

function Registrarse() {
  return (
    <div className='Login'>
        <h3 className='titles_input'>Nombre:</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Email:</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Contraseña:</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Foto de perfil:</h3>
        <span class='fit button'>
        <input type='file'/>
        <span>Click me to upload</span>
        </span>
        <hr />
        <button className='send'>Registrarse</button><br />
        <NavLink to="/sign">Iniciar sesion</NavLink>
    </div>
  )
}

export default Registrarse