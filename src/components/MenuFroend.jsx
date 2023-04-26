import { useState } from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';


function MenuFroend() {
	//Creamos el state
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	const [localCount,setlocalCount] = useState(0)
	return (
		//LLamamos a los headers para poder utilizarlos como moldes y poder utilizar y compartir con mas componentes los states
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
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

export default MenuFroend;