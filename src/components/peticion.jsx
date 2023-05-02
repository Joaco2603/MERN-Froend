import React from 'react'

const Peticion = () => {
   
    fetch('http://localhost:8080/product',{
        method:'GET',
        mode:'cors'
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

}

export default Peticion