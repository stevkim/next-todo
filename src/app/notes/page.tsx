import Link from 'next/link';
import NoteForm from './components/form';

async function getNotes() {
	const response = await fetch('http://localhost:3000/api/notes', {
		next: { tags: ['notes'] },
	});

	const result = await response.json();

	return result.data as any[];
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
	const { title, id, body } = note;

	return (
		<Link
			href={`notes/${id}`}
			className="p-2 flex gap-2"
		>
			<h2 className="mr-2 font-semibold">
				{id}.{' ' + title}
			</h2>
			<p>{body}</p>
		</Link>
	);
}
