import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'
import ItemContext from './contexts/ItemContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const removeItem = item => {
		// add the given item to the cart
		let stateArray = cart
		stateArray = stateArray.filter((curr) => {
			return curr != item
		})
		setCart(stateArray)
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{addItem, products, removeItem}}>
			<ItemContext.Provider value={{removeItem}}>
			<CartContext.Provider value={cart}>

			<Navigation/>

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
				/>

			<Route
				path="/cart"
				component={ShoppingCart}
				/>

			</CartContext.Provider>
			</ItemContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
