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
              <Menu />
              <Registrarse />
            </>
          }
        ></Route>

        <Route
          path="/Sign"
          element={
            <>
              <Menu />
              <Login />
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
