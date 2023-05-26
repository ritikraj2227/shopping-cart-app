import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Cartitem } from '../Context';

const Header = () => {
	const { cart } = useContext(Cartitem);

	return (
		<nav className='nav'>
			<span className='header'>Shopping App</span>
			<ul className='link'>
				<li>
					<NavLink to='/'>Home Page</NavLink>
				</li>
				<li>
					<NavLink to='/cart'>
						Cart <sup>{cart.length}</sup>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
