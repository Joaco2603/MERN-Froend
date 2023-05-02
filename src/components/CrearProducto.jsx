import React from 'react'
import './css/Login.css'
//Importo react dom para poder redireccionar
import {NavLink,useNavigate} from 'react-router-dom'

function CrearProducto() {
  //Lee los inputs file
  const reader= new FileReader();
  //Redirecciona a otro componente
  const navigate = useNavigate();

  return (
    //Inputs donde se ingresan los datos
    <div className='Login'>
        <h3 className='titles_input' >Producto:</h3>
        <input type="text" className='input_text' id='producto'/>
        <h3 className='titles_input'>Descripcion:</h3>
        <input type="text" className='input_text' id='desc'/>
        <h3 className='titles_input'>Precio:</h3>
        <input type="Number" className='input_text' id='precio'/>
        <h3 className='titles_input'>Foto de perfil:</h3>
        <span className='fit button' >
        <input type='file' id='img' onChange={()=>{
            reader.readAsDataURL(img.files[0]);
        }}/>
        <span>Click me to upload</span>
        </span>
        <hr />
        <button className='send' onClick={()=>{

//Guarda usuarios del frondEnd
         const User={
            producto: producto.value,
            desc: desc.value,
            precio: precio.value,
            img: reader.result,
         }

         console.log(User)
         //Hace la peticion para crear un producto
         fetch('http://localhost:8080/product',{
          headers: {
            'Content-Type': 'application/json',
            'json-token': localStorage.getItem('json-token') 
          },        
          method:'POST',
          mode:"cors",
            body:JSON.stringify(User),
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(console.log("Error"))
        }}>Publicar</button><br />
    </div>
  )
}

//Exporta el componente
export default CrearProducto