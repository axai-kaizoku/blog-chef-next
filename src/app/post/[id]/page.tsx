'use client';
import { useEffect, useState } from 'react';
import Post from '@/types/Post';
import { useParams } from 'next/navigation';
import formatDate from '@/utils/format-date';

export default function Post() {
	const params = useParams();
	const [post, setPost] = useState<Post>({
		_id: '',
		title: '',
		content: '',
		author: {
			_id: '',
			name: '',
			email: '',
			password: '',
			isAdmin: false,
			lastLogin: new Date(),
		},
		isApproved: true,
		createdAt: new Date(),
	});

	const fetchPost = async () => {
		const response = await fetch(`/api/post/${params.id}`);
		const data = await response.json();
		setPost(data);
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<>
			<section className="bg-white">
				<div className="max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col justify-center">
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
							{post.title}
						</h1>
						<p className="px-2 text-sm text-gray-500">By {post.author.name}</p>
						<p className="px-2 text-sm text-gray-500">
							{formatDate(post.createdAt)}
						</p>
						<br />
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">
							{post.content}
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
