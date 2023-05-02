import react,{ useEffect,useState } from 'react';

//Importamos los props  
export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
  }) => {
	//Creamos un state de cantidad y otro que es un array de datos que rellenamos con una peticion fetch a la base de datos
	const [data, setData] = useState([]);
	const [quantity,setQuiantity] = useState(1)
  
	//Cuando se recibe una respuesta del servidor se actualiza el state
	useEffect(() => {
		async function fetchData() {
		  const response = await fetch("http://localhost:8080/product");
		  const json = await response.json();
		  setData(json.products);
		}
		fetchData();
		//Funcion asincrona
	  }, []);
	  //Permite que se aplique una vez no tiene dependencias


	//Añade productos
	const onAddProduct = product => {
		console.log(product)
		//Si encuentra un producto igual en la base de datos lo agrega al carrito
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
				//Si el objeto existe le suma 1 sino lo pone por primera vez
					? { ...item, quantity: quantity+1 }
					: item
			);
			//Actualiza el carrito
			setTotal(total + product.precio * quantity);
			setCountProducts(countProducts + quantity);
			return setAllProducts([...products]);
		}
		//Suma el total, muestra todos los objetos y el contador
		setTotal(total + product.precio * quantity);
		setCountProducts(countProducts + quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
		  {data.length > 0 ? (
			data.map((product,i) => (
			  <div className='item' key={i}>
				<figure>
				  <img src={product.img} alt={product.producto} />
				</figure>
				<div className='info-product'>
				  <h2>{product.producto}</h2>
				  <p className='price'>${product.precio}</p>
				  <button onClick={() => onAddProduct(product)}>
					Añadir al carrito
				  </button>
				</div>
			  </div>
			))
		  ) : (
			<p>Cargando...</p>
		  )}
		</div>
	  );
	}
	
