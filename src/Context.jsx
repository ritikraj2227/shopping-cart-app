import React, { createContext, useState } from 'react';

export const Cartitem = createContext();

const Context = ({ children }) => {
	const [cart, setCart] = useState([]);

	return <Cartitem.Provider value={{ cart, setCart }}>{children}</Cartitem.Provider>;
};

export default Context;
