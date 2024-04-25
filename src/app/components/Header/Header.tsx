import Cart from './Cart/Cart';
import styles from './header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Cart />
		</header>
	);
}
