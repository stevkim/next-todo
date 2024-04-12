import Link from 'next/link';
import '@/app/globals.css';

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
