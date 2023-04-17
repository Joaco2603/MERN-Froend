import React, { useEffect, useState } from 'react'

function Card() {
  
  const objects = [
    {
      id:1,
      name:"Joaco",
      img: "https://robohash.org/user1",
      art:"Iphone 12",
      info:"dsadsadsa",
      carrito:false
    },
    {
      id:2,
      name:"Kevin",
      img:"https://robohash.org/user2",
      art:"Ford fiestas",
      info:"dsadsadsa",
      carrito:false
    },
    {
      id:3,
      name:"Carlos",
      img:"https://robohash.org/user3",
      art:"Ipad Mini",
      info:"dsadsadsa",
      carrito:false
    },
  ]

  const [save, setSave] = useState(objects);


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
            setSave(true)
          }}>{ (!objects[i].carrito )?"Añadir al carrito":"Añadido al carrito"}</button>
          </div>
          </div>
        })
      }
  </div>

  
  
}

export default Card