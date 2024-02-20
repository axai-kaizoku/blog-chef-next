import posts from '../../../data';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const post = posts.filter((p) => p.id === params.id);
	return Response.json({ params: params.id, post });
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const post = posts.findIndex((p) => p.id === params.id);
	const { title, content } = await request.json();
	posts[post].title = title;
	posts[post].content = content;
	return Response.json(posts[post]);
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const post = posts.findIndex((p) => p.id === params.id);
	const deletedPost = posts.splice(post, 1);
	return Response.json(deletedPost);
}
