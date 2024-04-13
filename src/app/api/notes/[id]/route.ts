import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/db/client';

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
