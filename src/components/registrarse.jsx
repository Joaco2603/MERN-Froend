import React from 'react'
import './css/Login.css'
//Redireccionar con react dom
import {NavLink,useNavigate} from 'react-router-dom'

//Creamos un componente
function Registrarse() {
  //Lee los inputs file
  const reader= new FileReader();
  //Redirecciona a otros componentes
  const navigate = useNavigate();

  return (
    //Forms con los datos que se agregaran a la base de mongo
    <div className='Login'>
        <h3 className='titles_input' >Nombre:</h3>
        <input type="text" className='input_text' id='nombre'/>
        <h3 className='titles_input'>Email:</h3>
        <input type="text" className='input_text' id='correo'/>
        <h3 className='titles_input'>Contraseña:</h3>
        <input type="text" className='input_text' id='password'/>
        <h3 className='titles_input'>Rol:</h3>
        <select name="" id="rol" className="select-css" >
          <option value="ADMIN_ROLE">ADMIN_ROLE</option>
          <option value="USER_ROLE">USER_ROLE</option>
        </select>
        <h3 className='titles_input'>Foto de perfil:</h3>
        <span className='fit button' >
        <input type='file' id='img' onChange={()=>{
          //Pasa la imagen a base 64
            reader.readAsDataURL(img.files[0]);
        }}/>
        <span>Click me to upload</span>
        </span>
        <hr />
        <button className='send' onClick={()=>{

//El objeto del froend que vamos a introducir en la base de mongo
         const User={
            nombre: nombre.value,
            correo: correo.value,
            password: password.value,
            img: reader.result,
            rol: rol.value
         }
         console.log(User)
         //Hace la peticion al endpoint por el cors
            fetch('http://localhost:8080/tienda',{
              method:"POST",
              mode:"cors",
              body:JSON.stringify(User),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res=>res.json())
              .then(res=>{
                console.log(res)
                if(res.errors){
                  console.log("Error")
                }else{
                  //Guarda en el localstorage la informacion del usuario para poder utilizarla con libertad y guarda el jwt para poderlo usar de manera mas sencilla en las peticiones(proteccion de las rutas a cualquiera que no este con un jwt)
                  localStorage.setItem("nombre",res.usuario.nombre)
                  localStorage.setItem("correo",res.usuario.correo)
                  localStorage.setItem("img",res.usuario.img)
                  localStorage.setItem("rol",res.usuario.rol)
                  localStorage.setItem("json-token",res.token)
                  navigate("/articulos");
                }
              })
              .catch(err=>console.log(err))
        }}>Registrarse</button><br />
        {/*Redireccion de componente */}
        <NavLink to="/sign">Iniciar sesion</NavLink>
    </div>
  )
}

//Exporta el componente
export default Registrarse