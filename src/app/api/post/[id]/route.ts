import Post from '@/models/Post';
import connect from '@/utils/db';

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
	{ params }: { params: { _id: string } },
) {
	return Response.json({ message: 'PUt funtion' });
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } },
) {
	return Response.json({ message: 'Delete function' });
}
