import Link from 'next/link';

const NAVS = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'About',
		link: '/about',
	},
	{
		name: 'Notes',
		link: '/notes',
	},
];

export default async function NavBar() {
	return (
		<nav className="flex gap-4 items-center">
			{NAVS.map((nav) => {
				return (
					<Link
						key={nav.name}
						href={nav.link}
					>
						{nav.name}
					</Link>
				);
			})}
		</nav>
	);
}
