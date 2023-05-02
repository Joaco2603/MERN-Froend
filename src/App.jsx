import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Importamos componentes y y el css y las funciones de react dom para redireccionar y utilizar componentes
import "./App.css";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Login from "./components/Login";
import Registrarse from "./components/registrarse";
import CrearProducto from './components/CrearProducto'
import Nofound from './components/Nofound'
import 'boxicons'
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import EstiloMenu from "./components/estiloMenu";
import User from './components/User'
import Peticion from "./components/peticion";

function App() {
  return (
    //Creamos las rutas de los componentes y los path de cada uno
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Registrarse />
            </>
          }
        ></Route>

        <Route
          path="/Sign"
          element={
            <>
              <Login />
            </>
          }
        ></Route>

        <Route
          path="/articulos"
          element={
            <>
              <EstiloMenu/>
            </>
          }
        ></Route>
         <Route
          path="/articulos/crear"
          element={
            <>
              <Menu />
              <CrearProducto />
            </>
          }
        ></Route>


        <Route
          path="/carrito"
          element={
            <>
              <h1>Hola</h1>
            </>
          }
        ></Route>

        <Route path="/user"
        element={
          <>
            <Menu/>
            <User/>
          </>
        }></Route>

        <Route
          path="/pagar"
          element={
            <>
              <h1>Hola</h1>
            </>
          }
        ></Route>
          {/*Redireccionar a otra ruta la cual no exista*/}
      <Route
          path="*"
          element={
            <>
              <Nofound />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

//Exportamos app
export default App;
