import React, { useContext, useEffect, useState } from 'react';
import { Cartitem } from '../Context';
import SingleProduct from './SingleProduct';

const Cart = () => {
	const { cart } = useContext(Cartitem);

	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
	}, [cart]);
	return (
		<div style={{ padding: '20px' }}>
			<span style={{ fontSize: '30px' }}> My cart</span>
			<br />
			<span style={{ fontSize: '30px' }}> Total : Rs.{total}</span>
			<div className='products'>
				{cart.map((prod) => (
					<SingleProduct
						prod={prod}
						key={prod.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Cart;
