import PostsData from '@/app/data';

export async function POST(request: Request) {
	const { title, content } = await request.json();

	const postArray = PostsData.filter((p) => p.id === '3');
	const post = postArray[0];
	post.title = title;
	post.content = content;
	return Response.json(post);
}
