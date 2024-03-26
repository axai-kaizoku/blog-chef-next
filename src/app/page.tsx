import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<div className="p-7">
				<h1 className="text-3xl font-semibold sm:text-4xl">
					Welcome to BlogChef.
				</h1>
				<p>Tech and Trendy Blogs</p>
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
			<PostCard />
		</main>
	);
}
