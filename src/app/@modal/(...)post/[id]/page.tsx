import Modal from '@/components/Modal';
import posts, { Post } from '../../../data';

export default function Post({ params: { id } }: { params: { id: string } }) {
	const post: Post = posts.find((p) => p.id === id)!;
	return (
		<Modal>
			<section className="bg-white rounded">
				<div className="max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col justify-center">
						<h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl ">
							{post.title}
						</h1>
						<p className="px-2 text-sm text-gray-500 ">By {post.author}</p>
						<p className="px-2 text-sm text-gray-500">{post.createdAt}</p>
						<br />
						<p className="mb-8 text-base font-normal text-gray-500 lg:text-base ">
							{post.content}
						</p>
					</div>
				</div>
			</section>
		</Modal>
	);
}
