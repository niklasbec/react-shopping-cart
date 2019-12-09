import React, {useContext} from 'react';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext';

const Products = props => {

	const context = useContext(ProductContext)

	return (
		<div className="products-container">
			{context.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={context.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
