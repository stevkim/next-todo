'use server';

import { redirect } from 'next/navigation';

export async function navigate(path: string) {
	console.log(path);
	redirect(path);
}
