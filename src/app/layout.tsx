import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';
import NavBar from './components/navbar';

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
				<NavBar />
				{children}
			</body>
		</html>
	);
}
