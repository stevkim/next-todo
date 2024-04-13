import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '@/db/client';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
	try {
		const { id } = await request.json();

		const result = await prisma.note.findUnique({
			where: {
				id: Number(id),
			},
		});

		return NextResponse.json({
			data: result,
		});
	} catch (err) {
		return NextResponse.error();
	} finally {
		prisma.$disconnect();
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const { id } = await request.json();

		const result = await prisma.note.delete({
			where: {
				id: id,
			},
		});
		revalidateTag('notes');

		return NextResponse.json({ revalidate: true }, { status: 202 });
	} catch (err) {
		return NextResponse.error();
	} finally {
		prisma.$disconnect();
	}
}
