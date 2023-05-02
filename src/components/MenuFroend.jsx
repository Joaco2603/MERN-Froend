import { useState } from "react";
//Exportamos componentes y states
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";

function MenuFroend() {
  //Creamos el state de todos los productos y de los productos seleccionados
  const [allProducts, setAllProducts] = useState([]);
  //Creamos un state para el total de dinero
  const [total, setTotal] = useState(0);
  //Creamos contador de cantidad de objetos en el carrito
  const [countProducts, setCountProducts] = useState(0);
  return (
    //LLamamos a los headers para poder utilizarlos como moldes y poder utilizar y compartir con mas componentes los states
    <>
      {/*Pasamos al header los states para poder usarlos en otros componentes*/}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      {/*Pasamos al header los states para poder usarlos en otros componentes*/}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

//Exportamos el componente
export default MenuFroend;
