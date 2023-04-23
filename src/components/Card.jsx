import React, { useEffect, useState } from 'react'

function Card() {
  
  const objects = [
    {
      id:1,
      name:"Joaco",
      img: "https://robohash.org/user1",
      art:"Iphone 12",
      info:"dsadsadsa",
    }
  ]

  const [save, setSave] = useState("Añadir al carrito");


  return <div className="container_container">
      {
        objects.map((object,i) => {
          return <div className='container' key={i}>
          <div className="card">
          <h1>{object.name}</h1>
          <img src={object.img} alt="" />
          <h2>{object.art}</h2>
          <h3>{object.info}</h3>
          <button id={i} onClick={()=>{
            setSave("Añadido al carrito")
          }}>{save}</button>
          </div>
          </div>
        })
      }
  </div>

  
  
}

export default Card