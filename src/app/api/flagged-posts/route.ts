import connect from '@/utils/database';
import Post from '@/models/Post';
import { censorContent } from '@/utils/profanity-filter';

export async function GET() {
	await connect();
	try {
		const flaggedPosts = await Post.find({ isApproved: false }).populate(
			'author',
			'name',
		);
		return Response.json(flaggedPosts, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}

export async function PUT(request: Request) {
	await connect();
	try {
		const { id } = await request.json();
		const post = await Post.findById(id);
		post.content = await censorContent(post.content);
		post.isApproved = true;
		await post.save();
		return Response.json(
			{ message: 'Approved successfully!' },
			{ status: 200 },
		);
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
