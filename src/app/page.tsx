'use client';
import Card from '@/components/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from './data';

export default function Home() {
	const user = false;
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		const response = await fetch('/posts/api');
		const data = await response.json();
		setPosts(data);
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<>
			<div className="p-7">
				<h1 className="text-3xl font-semibold ">Welcome to BlogChef.</h1>
				<p>Tech and Trendy Blogs</p>
				{user ? (
					<div>
						<br />
						<p>Axai Kaizoku</p>
						<p className="text-xs font-extralight">
							Last logged: 16:00 19th Feb
						</p>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
			<div className="flex items-center justify-center w-full h-0">
				<div className="flex flex-row justify-center w-11/12 h-full p-8">
					<div className="flex flex-row flex-wrap w-full h-full m-8">
						{posts.map((post: Post) => (
							<Card key={post.id}>
								<h5 className="text-xl font-bold tracking-tight text-gray-900 ">
									{post.title}
								</h5>
								<div className="flex flex-row justify-between mt-1 mb-3">
									<p className="text-xs font-normal">By {post.author}</p>
									<p className="text-xs font-light">{post.createdAt}</p>
								</div>
								<p className="mb-3 font-normal text-gray-700 ">
									{post.content.slice(0, post.content.lastIndexOf(' ', 100)) +
										' ...'}
								</p>
								<Link
									href={`post/${post.id}`}
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 ">
									Read more
								</Link>
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
