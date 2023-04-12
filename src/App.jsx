import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const objects = [
    {
      id:1,
      name:"Joaco",
      art:"Iphone 12"
    },
    {
      id:2,
      name:"Kevin",
      art:"Ford fiestas"
    },
    {
      id:3,
      name:"Carlos",
      art:"Ipad Mini"
    },
  ]

  return <div className="container_conteiner">
      {
        objects.map((object,i) => {
          
          
          return <div className='container' key={i}>
          <div className="card">
          <h1>{object.name}</h1>
          <h2>{object.art}</h2>
          <button onClick={()=>{
            
          }}>Añadir al carrito</button>
          </div>
          </div>
        })
      }
  </div>
  
}

export default App
