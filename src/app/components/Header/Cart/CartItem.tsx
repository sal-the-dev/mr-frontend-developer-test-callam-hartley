import { ProductInCartType } from '@/utils/types';
import Image from 'next/image';
import styles from './cart.module.css';

export default function CartItem({
	product,
	sizeID,
	qty
}: {
	product: ProductInCartType;
	sizeID: number;
	qty: number;
}) {
	let label;
	for (const sizeOption of product.sizeOptions) {
		if (sizeOption.id == sizeID) {
			label = sizeOption.label;
			break;
		}
	}
	return (
		<div className={styles.cartItemContainer}>
			<Image width="60" height="90" alt="" src={product.imageURL} />
			<div className={styles.cartItemDetails}>
				<p>{product.title}</p>
				<p>
					{qty}x <b>${product.price.toFixed(2)}</b>
				</p>
				<p>Size: {label}</p>
			</div>
		</div>
	);
}
