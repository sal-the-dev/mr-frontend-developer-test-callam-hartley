'use client';

import React from 'react';
import { Cart, Action } from '@/utils/types';

const CartContext = React.createContext<Cart>(null);
const CartDispatchContext = React.createContext<null | React.Dispatch<Action>>(
	null
);

export default function CartProvider({
	children
}: {
	children: React.ReactNode;
}) {
	const [cart, dispatch] = React.useReducer(cartReducer, null);

	return (
		<CartContext.Provider value={cart}>
			<CartDispatchContext.Provider value={dispatch}>
				{children}
			</CartDispatchContext.Provider>
		</CartContext.Provider>
	);
}

export function useCart() {
	return React.useContext(CartContext);
}

export function useCartDispatch() {
	return React.useContext(CartDispatchContext);
}

// reducer for further cart expansion without rework, provided by global state
function cartReducer(cart: Cart, action: Action): Cart {
	const { product, sizeID } = action;
	switch (action.type) {
		case 'add': {
			console.log('Product added to cart');
			console.log('action', action);
			console.log('previous cart', cart);
			return {
				...cart,
				[product.id]: {
					...product,
					inCart: {
						...cart?.[product.id].inCart,
						[sizeID]: cart?.[product.id].inCart[sizeID]
							? cart?.[product.id].inCart[sizeID] + 1
							: 1
					}
				}
			};
		}
		default: {
			console.error('Invalid action received', action);
			return {};
		}
	}
}
