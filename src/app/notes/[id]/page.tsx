async function getNotes(noteId: string) {
	const result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${noteId}`,
		{
			next: { revalidate: 10 },
		}
	);

	return (await result.json()) as any;
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
