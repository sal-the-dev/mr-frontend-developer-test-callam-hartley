import { API_URL } from '@/utils/api';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

export default async function Home() {
	const product = await fetch(API_URL)
		.then(data => data.json())
		.catch(e => {
			console.error('There was a problem fetching the product.', e);
			return null;
		});

	// redirect to error page?
	if (product === null) return <p>There was a problem loading the product.</p>;

	return (
		<main>
			<Header />
			<Product product={product} />
		</main>
	);
}
