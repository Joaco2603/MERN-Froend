import React from 'react'
import './css/Login.css'
import {NavLink,useNavigate} from 'react-router-dom'


//Creo un componente
function Login() {

  //redirecciona
  const navigate = useNavigate();
  return (
    //Forms que de la informacion que se ingresara a mongo
    <div className='Login'>
        <h3 className='titles_input'>Correo:</h3>
        <input type="text" className='input_text' id='correo'/>
        <h3 className='titles_input'>Contraseña:</h3>
        <input type="text" className='input_text' id='password'/>
        <button className='send' onClick={()=>{
          //Validacion sencilla para evitar que vaya vacio el espacio
          if( correo.value < 1 ){
            alert("Rellene los campos")
            
          }else if(password.value < 1){
            alert("Rellene los campos")
          }else
          {
            //El objeto froend que buscara en la base de mongo
            const user = {
              correo:correo.value,
              password:password.value
            }
            //Hace la peticion al endpoint por el cors
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
                //Si el backend encuentra este error lo retorna y aca hacemos una validacion para mostrarlo en pantalla
                alert("Usuario / Password no son correctos")
              }else{
                 //Guarda en el localstorage la informacion del usuario para poder utilizarla con libertad y guarda el jwt para poderlo usar de manera mas sencilla en las peticiones(proteccion de las rutas a cualquiera que no este con un jwt)
                console.log(res)
                localStorage.setItem("nombre",res.usuario.nombre)
                localStorage.setItem("correo",res.usuario.correo)
                localStorage.setItem("img",res.usuario.img)
                localStorage.setItem("rol",res.usuario.rol)
                localStorage.setItem("json-token",res.token)
                navigate("/articulos");
              }
            })
          }
        }}>Registrarse</button>
        <div>
        {/*Redireccion de componente */}
        <NavLink to="/">Crear una cuenta</NavLink>
        </div>
    </div>
  )
}

//Exportamos el componente
export default Login