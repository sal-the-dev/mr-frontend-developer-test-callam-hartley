import { SizeType } from '@/utils/types';
import SizeButton from './SizeButton';
import styles from './size.module.css';

export default function SizeSelector({
	sizes,
	selectedSize,
	selectedSizeLabel,
	setSize
}: {
	sizes: SizeType[];
	selectedSize: number;
	selectedSizeLabel: string | undefined;
	setSize: any;
}) {
	return (
		<div className={styles.sizeContainer}>
			<p className={styles.sizeInputLabel}>
				Size<span className="required">*</span>{' '}
				{selectedSizeLabel && (
					<span className={styles.selectedSizeLabel}>
						{selectedSizeLabel}
					</span>
				)}
			</p>
			<div className={styles.sizeButtons}>
				{sizes.map(size => (
					<SizeButton
						selected={selectedSize === size.id}
						key={size.id}
						size={size}
						setSize={setSize}
					/>
				))}
			</div>
		</div>
	);
}
