import React, {useContext} from 'react';
import ItemContext from '../contexts/ProductContext';


const Item = props => {

	const remove = useContext(ItemContext)
	console.log(props.item);

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => remove.removeItem(props.item)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
