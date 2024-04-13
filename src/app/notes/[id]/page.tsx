async function getNotes(noteId: string) {
	const result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${noteId}`,
		{
			next: { revalidate: 10 },
		}
	);

	return (await result.json()) as any;
}

async function testEndpoint() {
	const result = await fetch('http://localhost:3000/api/notes');

	return (await result.json()) as any;
}

export default async function NotePage({ params }: any) {
	const [note, test] = await Promise.all([getNotes(params.id), testEndpoint()]);

	return (
		<div className="mb-4">
			<h4 className="text-lg font-semibold">{note.title}</h4>
			<p>{note.body}</p>
			<p>{test.message}</p>
		</div>
	);
}
