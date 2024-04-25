'use client';
import React from 'react';

import { ProductType } from '@/utils/types';
import { SizeType } from '@/utils/types';
import SizeSelector from './SizeSelector/SizeSelector';
import { useCartDispatch } from '@/app/providers/CartProvider';
import styles from './product.module.css';
import Image from 'next/image';

export default function Product({ product }: { product: ProductType }) {
	const [selectedSize, setSelectedSize] = React.useState<SizeType['id']>(0);
	const [error, setError] = React.useState(false);
	const cartDispatch = useCartDispatch()!;

	let selectedSizeLabel;
	for (const size of product.sizeOptions)
		if (size.id == selectedSize) {
			selectedSizeLabel = size.label;
			break;
		}

	function setSize(id: SizeType['id']) {
		setSelectedSize(prevSize => (prevSize === id ? 0 : id));
	}

	return (
		<div className={styles.productContainer}>
			<div className={styles.productImageContainer}>
				<Image
					className={styles.productImage}
					src={product.imageURL}
					alt=""
					width="600"
					height="900"
				/>
			</div>
			<div className={styles.detailsContainer}>
				<h3>{product.title}</h3>
				<p className={styles.price}>${product.price.toFixed(2)}</p>
				<p className={styles.description}>{product.description}</p>
				<SizeSelector
					sizes={product.sizeOptions}
					selectedSize={selectedSize}
					selectedSizeLabel={selectedSizeLabel}
					setSize={setSize}
				/>
				<button
					className={styles.cartButton}
					onClick={() => {
						if (selectedSize !== 0) {
							cartDispatch({
								type: 'add',
								product: product,
								sizeID: selectedSize
							});
							setError(false);
						} else setError(true);
					}}
				>
					Add to cart
				</button>
				{error && (
					<p className={styles.errorMsg}>
						You must select a size before adding a product to the cart.
					</p>
				)}
			</div>
		</div>
	);
}
