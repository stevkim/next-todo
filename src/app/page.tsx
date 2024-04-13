import Image from 'next/image';
import Editor from './components/editor';

export default function Home() {
	return (
		<main>
			<div className="w-[350px] relative h-auto min-h-[500px]">
				<Image
					src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x3839/australian-shepherd.jpg"
					alt="aussie"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority={true}
					className="h-auto w-full"
				/>
			</div>
			<Editor />
		</main>
	);
}
