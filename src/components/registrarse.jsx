import React from 'react'
import './css/Login.css'
import {NavLink,useNavigate} from 'react-router-dom'

function Registrarse() {
  const reader= new FileReader();
  const navigate = useNavigate();

  return (
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
            reader.readAsDataURL(img.files[0]);
        }}/>
        <span>Click me to upload</span>
        </span>
        <hr />
        <button className='send' onClick={()=>{

         const user={
            nombre: nombre.value,
            correo: correo.value,
            password: password.value,
            img: reader.result,
            rol: rol.value
         }
         console.log(user)
            fetch('http://localhost:8080/tienda',{
              method:"POST",
              mode:"cors",
              body:JSON.stringify(user),
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
                  localStorage.setItem("nombre",res.nombre)
                  localStorage.setItem("correo",res.correo)
                  localStorage.setItem("img",res.img)
                  localStorage.setItem("rol",res.rol)
                  navigate("/articulos");
                }
              })
              .catch(err=>console.log(err))
        }}>Registrarse</button><br />
        <NavLink to="/sign">Iniciar sesion</NavLink>
    </div>
  )
}

export default Registrarse