import React from 'react'
import './css/user.css'


const User = () => {
  return (
    <>
        <div className="div_container">
            <div className="container">
                <div className="card">
                    <div className="publicaciones">
                    <h1 className="historial">Historial</h1>
                        
                    </div>
                    <div className="user">
                        <div className="img"><img alt="imagen aleatoria" src="https://picsum.photos/700/400?random"/></div>
                        <div className="name"><h1>User name</h1></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default User