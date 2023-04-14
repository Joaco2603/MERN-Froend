import React from 'react'
import './css/Login.css'

{/* <h3 className='titles_input'>Nombre:</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Producto:</h3>
        <input type="File" />
        <h3 className='titles_input'>Articulo</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Descripcion:</h3>
        <input type="text" className='input_text'/>
        <button className='send'>Registrarse</button> */}


function Login() {
  return (
    <div>
        <h3 className='titles_input'>Correo:</h3>
        <input type="text" className='input_text'/>
        <h3 className='titles_input'>Contraña:</h3>
        <input type="text" className='input_text'/>
        <button className='send'>Registrarse</button>
    </div>
  )
}

export default Login