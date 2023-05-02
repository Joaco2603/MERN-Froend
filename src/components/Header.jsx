import { useState } from "react";
import {NavLink} from 'react-router-dom'

//El componente utiliza el hook useState para manejar el estado de la variable active, que controla si la lista de productos del carrito se muestra o no. También recibe varias propiedades como argumentos, como allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal, que son utilizadas para mostrar la lista de productos del carrito y actualizar el estado del carrito


//Exportamos los header y la funcion
export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {

  //Activa el hidden del carrito
  const [active, setActive] = useState(false);
  //Variable de cantidad de articulos
  const [quantity, setQuiantity] = useState(1)

  //Eliminar un objeto del carrito
  const onDeleteProduct = (product) => {
    //Filtro para eliminar ese objeto como tal del carrito
    const results = allProducts.filter((item) => item.id !== product.id);
    //al total le quito el precio total de ese producto
    setTotal(total - product.precio * quantity);
    //Al contador le quito la cantidad de productos que estaban de este mismo
    setCountProducts(countProducts - quantity);
    //Meto lo anterior a los products para actualizarlo
    setAllProducts(results);
  };

  const onCleanCart = () => {
    //Restablezco todo por defecto
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    //Menu con redireccionamiento a los path
    <header>
      <div className="container_menu">
        <nav>
          <NavLink to="" className="opt_menu">
            Tienda
          </NavLink>
          <NavLink to="/articulos/crear" className="opt_menu">
            Añadir publicacion
          </NavLink>
          <NavLink to="/user" className="opt_menu">
            User
          </NavLink>
          <NavLink to="/pagar" className="opt_menu">
            Pagar
          </NavLink>
        </nav>
      </div>

    {/*Icono con el state active para cambiar el hidden con un onclick*/}
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            {/*Ponemos el resultado del state contador */}
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
        //Cambiamos la clase
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {/*Si hay algo en todos los productos que los muestre sino que muestre que el carrito esta vacio*/}
          {allProducts.length ? (
            <>
            {/*Recorremos y llenamos la cards de los objetos json*/}
              <div className="row-product">
                {allProducts.map((product,i) => (
                  <div className="cart-product" key={i}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {quantity}
                      </span>
                      <p className="titulo-producto-carrito">
                        {product.producto}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.precio}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>

              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
