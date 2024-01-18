'use client';

import { useCart } from '@/hooks/use-cart';
import { Product } from '@/payload-types';
import { FC, useEffect, useState } from 'react';
import { Button } from './ui/button';

interface AddToCartButtonProps {
	product: Product;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
	const { addItem } = useCart();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsSuccess(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [isSuccess]);

	return (
		<Button
			onClick={() => {
				addItem(product);
				setIsSuccess(true);
			}}
			size="lg"
			className="w-full"
		>
			{isSuccess ? 'Added!' : 'Add to cart'}
		</Button>
	);
};

export default AddToCartButton;
