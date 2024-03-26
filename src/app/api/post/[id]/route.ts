import Post from '@/models/Post';
import connect from '@/utils/database';
import { profanityFilter } from '@/utils/profanity-filter';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	await connect();
	try {
		const post = await Post.findById({ _id: params.id }).populate(
			'author',
			'name',
		);
		if (!post) {
			return Response.json(
				{ error: 'Post not found' },
				{
					status: 404,
				},
			);
		}
		// console.log(post);
		return Response.json(post, { status: 200 });
	} catch (error: any) {
		console.error('Error fetching post:', error);
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } },
) {
	await connect();
	try {
		const { title, content } = await request.json();

		const badWords = await profanityFilter(content);

		const post = await Post.findOne({ _id: params.id });

		post.title = title;
		post.content = content;
		post.isApproved = !badWords;
		await post.save();
		return Response.json(post, { status: 200 });
	} catch (error: any) {
		console.error('Error fetching post:', error);
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } },
) {
	await connect();
	try {
		await Post.findByIdAndDelete(params.id);
		return Response.json({ message: 'Deleted Successfully' }, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
