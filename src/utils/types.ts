export type SizeType = {
	id: number;
	label: string;
};

export type ProductType = {
	id: number;
	title: string;
	description: string;
	price: number;
	imageURL: string;
	sizeOptions: SizeType[];
};

export type ProductInCartType = ProductType & {
	inCart: {
		[sizeID: SizeType['id']]: number;
	};
};

export type Cart = null | {
	[id: ProductType['id']]: ProductInCartType;
};

export type Action = {
	type: string;
	product: ProductType;
	sizeID: SizeType['id'];
};
