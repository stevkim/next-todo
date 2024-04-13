import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '@/db/client';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
	try {
		const results = await prisma.note.findMany();

		return NextResponse.json({ data: results });
	} catch (err) {
		return NextResponse.error();
	} finally {
		prisma.$disconnect();
	}
}

export async function POST(request: NextRequest) {
	const data = await request.json();

	try {
		await prisma.note.create({
			data: data,
		});

		revalidateTag('notes');

		return NextResponse.json(
			{ revalidated: true, now: Date.now() },
			{ status: 201 }
		);
	} catch (err) {
		return NextResponse.error();
	} finally {
		prisma.$disconnect();
	}
}
