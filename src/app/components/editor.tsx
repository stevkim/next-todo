'use client';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const options = [
	['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'], // custom button values
	[{ list: 'ordered' }, { list: 'bullet' }],
	[{ indent: '-1' }, { indent: '+1' }],
	[{ size: ['small', false, 'large', 'huge'] }],
];

export default function Editor() {
	const [value, setValue] = useState(
		'<p>Testingas</p><ul><li>qdasdqwd<span class="ql-size-small">asdqwdqwdqwd</span></li></ul><p><br></p><ol><li><span class="ql-size-small">aasdqwdqwd</span></li></ol><blockquote><span class="ql-size-small">asdqwdqwd</span></blockquote>'
	);

	const onSubmit = () => {
		console.log(value);
	};

	return (
		<div>
			<ReactQuill
				value={value}
				modules={{ toolbar: options }}
				onChange={setValue}
			/>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
}
