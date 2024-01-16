'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { cn, formatPrice } from '@/lib/utils';
import { Product } from '@/payload-types';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface ProductListingProps {
	product: Product | null;
	index: number;
}

const ProductListing: FC<ProductListingProps> = ({ index, product }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, index * 75);

		return () => clearTimeout(timer);
	}, [index]);

	if (!product || !isVisible) return <ProductPlaceholder />;

	const label = PRODUCT_CATEGORIES.find(
		({ value }) => value === product.category
	)?.label;

	if (isVisible && product) {
		return (
			<Link
				href={`/product/${product.id}`}
				className={cn(
					'invisible h-full w-full cursor-pointer group/main',
					{ 'visible animate-in fade-in-5': isVisible }
				)}
			>
				<div className="flex flex-col w-full">
					<h1
						className="mt-4 font-medium
						text-sm text-gray-700"
					>
						{product.name}
					</h1>
					<p
						className="mt-1 text-sm
						text-gray-500"
					>
						{label}
					</p>
					<p
						className="mt-1 font-medium
						text-sm text-gray-900"
					>
						{formatPrice(product.price)}
					</p>
				</div>
			</Link>
		);
	}
};

const ProductPlaceholder = () => {
	return (
		<div className="flex flex-col w-full">
			<div
				className="relative bg-zinc-100
				aspect-square w-full overflow-hidden
				rounded-xl"
			>
				<Skeleton className="h-full w-full" />
			</div>
			<Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
			<Skeleton className="mt-2 w-16 h-4 rounded-lg" />
			<Skeleton className="mt-2 w-12 h-4 rounded-lg" />
		</div>
	);
};

export default ProductListing;
