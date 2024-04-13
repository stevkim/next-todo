'use client';

import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor() {
	const [value, setValue] = useState('<p>Testing</p>');

	const onSubmit = () => {
		console.log(value);
	};

	return (
		<div>
			<ReactQuill
				theme="snow"
				value={value}
				readOnly
				modules={{ toolbar: false }}
			/>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
}
