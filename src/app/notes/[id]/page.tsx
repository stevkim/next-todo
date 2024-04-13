async function getNotes(noteId: string) {
	const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
		method: 'POST',
		next: { revalidate: 10 },
		body: JSON.stringify({ id: noteId }),
	});
	const result = await response.json();
	return result.data as any;
}

export default async function NotePage({ params }: any) {
	const note = await getNotes(params.id);

	return (
		<div className="mb-4">
			<h4 className="text-lg font-semibold">{note.title}</h4>
			<p>{note.body}</p>
		</div>
	);
}
