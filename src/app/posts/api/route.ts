import posts from '../../data';

export async function GET() {
	return Response.json(posts);
}

export async function POST(request: Request) {
	const { title, content } = await request.json();
	const newPost = {
		id: `${posts.length + 1}`,
		title: title,
		content: content,
		author: 'unknown',
		createdAt: `${new Date().toDateString()}`,
	};
	posts.push(newPost);
	return new Response(JSON.stringify(newPost), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 201,
	});
}
