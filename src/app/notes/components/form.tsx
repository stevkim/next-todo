'use client';

import { FormEvent, useState } from 'react';
import { navigate } from '@/app/actions/redirect';

export default function NoteForm() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const add = async (e: FormEvent) => {
		e.preventDefault();
		const data = { title, body };

		const response = await fetch('http://localhost:3000/api/notes', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
			next: {
				tags: ['notes'],
			},
		});
		setTitle('');
		setBody('');
		navigate('/notes');
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
