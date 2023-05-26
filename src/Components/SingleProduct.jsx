import React, { useContext } from 'react';
import { Cartitem } from '../Context';

const SingleProduct = ({ prod }) => {
	const { cart, setCart } = useContext(Cartitem);
	return (
		<div className='product'>
			<img
				src={prod.img}
				alt={prod.name}
			/>
			<div className='prodictdisc'>
				<span>{prod.name}</span>
				<span>₹{prod.price.substring(0, 3)}</span>
			</div>

			{cart.includes(prod) ? (
				<button
					onClick={() => {
						setCart(cart.filter((c) => c.id !== prod.id));
					}}>
					Remove from cart
				</button>
			) : (
				<button
					onClick={() => {
						setCart([...cart, prod]);
					}}>
					Add to cart
				</button>
			)}
		</div>
	);
};

export default SingleProduct;
