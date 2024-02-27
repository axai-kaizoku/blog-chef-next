'use client';
import Card from '@/components/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Post from '@/types/Post';
import formatDate from '@/utils/format-date';

export default function Home() {
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		const response = await fetch('/api/post');
		const data = await response.json();
		setPosts(data);
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<>
			<div className="p-7">
				<h1 className="text-3xl font-semibold sm:text-4xl">
					Welcome to BlogChef.
				</h1>
				<p>Tech and Trendy Blogs</p>
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
			<div className="flex items-center justify-center w-full h-full">
				<div className="flex flex-row justify-center w-full h-full py-4 px-6">
					<div className="flex flex-row flex-wrap w-full h-full m-8">
						{posts.length > 0 ? (
							posts.map((post: Post) => (
								<Card key={post._id}>
									<h5 className="text-xl font-bold tracking-tight text-gray-900 ">
										{post.title}
									</h5>
									<div className="flex flex-row justify-between mt-1 mb-3">
										<p className="text-xs font-normal">By {post.author.name}</p>
										<p className="text-xs font-light">
											{formatDate(post.createdAt)}
										</p>
									</div>
									<p className="mb-3 font-normal text-gray-700 ">
										{post.content.slice(0, post.content.lastIndexOf(' ', 100)) +
											' ...'}
									</p>
									<Link
										href={`post/${post._id}`}
										className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 ">
										Read more
									</Link>
								</Card>
							))
						) : (
							<div className="flex flex-row justify-center items-center w-full h-96">
								<div className="w-12 h-12 border-t-8 rounded-full border-8 border-t-slate-500 border-gray-300 animate-spin"></div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
