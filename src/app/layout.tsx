import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Todos',
	description: 'Todo-List',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="">
				<nav className="flex gap-4">
					<Link href={'/'}>Home</Link>
					<Link href={'/notes'}>Notes</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
