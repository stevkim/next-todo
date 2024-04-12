import Link from 'next/link';

interface Props {
	children: React.ReactNode;
}

export default function NoteLayout({ children }: Props) {
	return (
		<section>
			{children}
			<Link
				className="font-bold border-2 p-1 mt-5"
				href="/notes"
			>
				Back
			</Link>
		</section>
	);
}
