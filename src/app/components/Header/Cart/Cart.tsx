'use client';

import React from 'react';
import CartDropdown from './CartDropdown';
import styles from './cart.module.css';
import { useCart } from '@/app/providers/CartProvider';

export default function Cart() {
	const [active, setActive] = React.useState(false);
	const cart = useCart();

	let totalQty = 0;
	if (cart)
		for (const product of Object.values(cart))
			for (const qty of Object.values(product.inCart)) totalQty += qty;

	return (
		<div className={styles.cart}>
			<p
				className={styles.cartButton}
				data-active={active}
				onClick={() => setActive(prevActive => !prevActive)}
			>
				My Cart ({totalQty})
			</p>
			{active && <CartDropdown />}
		</div>
	);
}
