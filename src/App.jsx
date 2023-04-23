import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Login from "./components/Login";
import Registrarse from "./components/registrarse";
import CrearProducto from './components/CrearProducto'
import Nofound from './components/Nofound'
import 'boxicons'

function App() {
  return (
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
              <Menu />
              <Card />
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

export default App;
