import { useCart } from '@/app/providers/CartProvider';
import styles from './cart.module.css';
import CartItem from './CartItem';

export default function CartDropdown() {
	const cart = useCart();
	let products;
	if (cart) {
		products = [];
		for (const product of Object.values(cart)) {
			for (const [sizeID, qty] of Object.entries(product.inCart)) {
				products.push(
					<CartItem
						key={`${product.id}-${sizeID}`}
						product={product}
						sizeID={sizeID as unknown as number}
						qty={qty}
					/>
				);
			}
		}
	} else products = <p>Your cart is currently empty.</p>;
	return <div className={styles.cartDropdownContainer}>{products}</div>;
}
