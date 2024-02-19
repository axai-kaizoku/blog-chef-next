import posts, { Post } from '../../data';

export default function Post({ params: { id } }: { params: { id: string } }) {
	const post: Post = posts.find((p) => p.id === id)!;
	return (
		<>
			<div className="p-7">
				<h1 className=" font-semibold text-3xl">{post.title}</h1>
				<p className="pt-8">By {post.author}</p>
				<p className="text-xs ">{post.createdAt}</p>
			</div>
			<div className="flex justify-center items-center">
				<div className=" w-full mx-5 border"></div>
			</div>
			<div className="p-8">{post.content}</div>
		</>
	);
}
