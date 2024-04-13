'use client';
import Link from 'next/link';
import { navigate } from '@/app/actions/redirect';

async function deleteNote(e: React.MouseEvent<HTMLButtonElement>, id: number) {
	e.stopPropagation();
	const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
		method: 'DELETE',
		next: { tags: ['notes'] },
		body: JSON.stringify({ id: id }),
	});

	navigate('/notes');
}

export default function Note({ note }: any) {
	const { title, id, body } = note;

	return (
		<div className="flex items-center">
			<Link
				href={`notes/${id}`}
				className="p-2 flex gap-2 items-center"
			>
				<h2 className="mr-2 font-semibold">
					{id}.{' ' + title}
				</h2>
				<p>{body}</p>
			</Link>
			<button
				onClick={(e) => deleteNote(e, id)}
				className="border-2 p-1"
			>
				DEL
			</button>
		</div>
	);
}
