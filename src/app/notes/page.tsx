import Link from 'next/link';
import NoteForm from './components/form';

async function getNotes() {
	const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-store',
	});
	return (await result.json()) as any[];
}

export default async function NotesPage() {
	const notes = await getNotes();

	return (
		<div>
			<h1 className="text-2xl">Notes</h1>
			<NoteForm />
			<div>
				{notes.map((note) => {
					return (
						<Note
							key={note.id}
							note={note}
						/>
					);
				})}
			</div>
		</div>
	);
}

function Note({ note }: any) {
	const { title, id } = note;

	return (
		<Link
			href={`notes/${note.id}`}
			className="p-2 flex"
		>
			<h2 className="mr-2">{id}.</h2>
			<p>{title}</p>
		</Link>
	);
}
