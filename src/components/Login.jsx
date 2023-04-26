import React from 'react'
import './css/Login.css'
import {NavLink,useNavigate} from 'react-router-dom'

//Creo un componente
function Login() {

  //redirecciona
  const navigate = useNavigate();
  return (
    <div className='Login'>
        <h3 className='titles_input'>Correo:</h3>
        <input type="text" className='input_text' id='correo'/>
        <h3 className='titles_input'>Contraseña:</h3>
        <input type="text" className='input_text' id='password'/>
        <button className='send' onClick={()=>{
          if( correo.value < 1 ){
            alert("Rellene los campos")
            
          }else if(password.value < 1){
            alert("Rellene los campos")
          }else
          {
            //El objeto froend
            const user = {
              correo:correo.value,
              password:password.value
            }
            //Hace la peticion al endpoint
            fetch("http://localhost:8080/sign",{
            method: "POST",
            mode:"cors",
            body:JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res=>res.json())
            .then(res=>{
              if(res.msg == "Usuario / Password no son correctos"){
                alert("Usuario / Password no son correctos")
              }else{
                localStorage.setItem("nombre",res.nombre)
                  localStorage.setItem("correo",res.correo)

                navigate("/articulos");
              }
            })
          }
        }}>Registrarse</button>
        <div>
        <NavLink to="/">Crear una cuenta</NavLink>
        </div>
    </div>
  )
}

export default Login