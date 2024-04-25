import styles from './size.module.css';

export default function SizeButton(props: any) {
	const { size, setSize, selected } = props;

	return (
		<button
			className={styles.sizeButton}
			data-selected={selected}
			onClick={() => setSize(size.id)}
		>
			{size.label}
		</button>
	);
}
