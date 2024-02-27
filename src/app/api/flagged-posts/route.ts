import connect from '@/utils/db';
import Post from '@/models/Post';

export async function GET() {
	await connect();
	try {
		const flaggedPosts = await Post.find({ isApproved: true }).populate(
			'author',
			'name',
		);
		return Response.json(flaggedPosts, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}

export async function PUT() {
	await connect();

	try {
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
