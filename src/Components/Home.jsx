import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(100);

const Home = () => {
	const productArray = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		img: faker.image.image(),
	}));

	const [product] = useState(productArray);

	return (
		<div className='products'>
			{product.map((prod) => (
				<SingleProduct
					prod={prod}
					key={prod.id}
				/>
			))}
		</div>
	);
};

export default Home;
