'use client';

import { FormEvent, useState } from 'react';
export default function NoteForm() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const add = async (e: FormEvent) => {
		e.preventDefault();
		const data = { title, body };

		console.log(data);
		setTitle('');
		setBody('');
	};

	return (
		<form onSubmit={(e) => add(e)}>
			<legend>Add Note</legend>
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
}
