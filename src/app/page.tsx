import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function Home() {
	return (
		<MaxWidthWrapper>
			<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
				<h1>
					UI-digital market it`s your marketplace for high-quality{' '}
					<span className="text-purple-500">digital assets</span>
				</h1>
			</div>
		</MaxWidthWrapper>
	);
}
