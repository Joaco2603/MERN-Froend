import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Login from "./components/Login";
import Registrarse from "./components/registrarse";
import Nofound from './components/Nofound'

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
              <Card />
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
