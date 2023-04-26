import React, { useEffect, useState } from 'react'

//Creo un componente que reciba desde el props 
function Card(props) {
  const datos = [];
  datos.push(props)
  //Creamos states con diferentes valores
  const [save, setSave] = useState("Añadir al carrito");
  const [count,setCount] = useState(0);

  return <>

  <div className="container_container">
      {
        datos.map((object,i) => {
          return <div className='container' key={i}>
          <div className="card">
          <h1>{object.name}</h1>
          <img src={object.img} alt="" />
          <h2>{object.art}</h2>
          <h3>{object.info}</h3>
          <button id={i} onClick={()=>{
            setSave("Añadido al carrito")
            setCount(count+1)
            localStorage.setItem('carrito',object)
          }}>{save}</button>
          </div>
          </div>
        })
      }
  </div>
  </>

  
  
}
export default Card