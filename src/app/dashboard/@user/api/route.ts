import PostsData from '@/app/data';

export async function GET() {
	const posts = PostsData.filter((p) => parseInt(p.id) % 2 === 0);

	return Response.json(posts);
}
