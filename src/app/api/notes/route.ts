import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	console.log('Test');

	return NextResponse.json({ message: 'TEST' });
}

export async function POST(request: NextRequest) {
	const data = await request.json();

	console.log(data);

	return NextResponse.json({ message: 'Test' });
}
