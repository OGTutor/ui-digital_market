'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { FC, useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';

interface KeyboardEvent {
	key: string;
}

const NavItems: FC = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>();

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setActiveIndex(null);
			}
		};

		document.addEventListener('keydown', handler);

		return () => {
			document.removeEventListener('keydown', handler);
		};
	}, []);

	const isAnyOpen = activeIndex !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => setActiveIndex(null));

	return (
		<div className="flex gap-4 h-full" ref={navRef}>
			{PRODUCT_CATEGORIES.map((category, idx) => {
				const handleOpen = () => {
					if (activeIndex === idx) {
						setActiveIndex(null);
					} else {
						setActiveIndex(idx);
					}
				};

				const isOpen = idx === activeIndex;

				return (
					<NavItem
						category={category}
						handleOpen={handleOpen}
						isOpen={isOpen}
						key={category.value}
						isAnyOpen={isAnyOpen}
					/>
				);
			})}
		</div>
	);
};

export default NavItems;
