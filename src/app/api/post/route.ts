import Post from '@/models/Post';
import connect from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export async function POST(request: Request) {
	try {
		const session = await getServerSession();
		if (!session) {
			return Response.json({ error: 'Unauthorized' });
		}
		const { title, content } = await request.json();

		const author = await User.findOne({ email: session.user?.email });
		await connect();

		const newPost = new Post({
			title,
			content,
			author: author._id,
		});

		await newPost.save();
		return new NextResponse('Post created', { status: 201 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}

export async function GET(request: Request) {
	try {
		await connect();
		const posts = await Post.find()
			.sort({ createdAt: -1 })
			.populate('author', 'name')
			.lean();
		return Response.json(posts);
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}
