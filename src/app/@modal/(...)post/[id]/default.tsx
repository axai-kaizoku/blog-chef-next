'use client';
import Modal from '@/components/Modal';
import Post from '@/types/Post';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import formatDate from '@/utils/format-date';

export default function Post() {
	const params = useParams();
	const [loading, setLoading] = useState(true);
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
		setLoading(true);
		const response = await fetch(`/api/post/${params.id}`);
		const data = await response.json();
		setPost(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPost();
	}, []);
	return (
		<>
			<Modal>
				{loading ? (
					<>
						<div className="flex flex-row justify-center items-center w-full h-full">
							<div className="w-11 h-11 border-t-8 rounded-full border-8 border-t-slate-500 border-gray-300 animate-spin"></div>
						</div>
					</>
				) : (
					<section className="bg-white rounded">
						<div className="max-w-screen-xl gap-8 pb-0 sm:pb-8 px-4 py-4 sm:py-8 mx-auto lg:py-16 lg:grid-cols-2 lg:gap-16">
							<div className="flex flex-col justify-center">
								<h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl ">
									{post.title}
								</h1>
								<div className="flex flex-row sm:flex-col ">
									<p className="px-2 text-sm text-gray-500 ">
										By {post.author.name}
									</p>
									<p className="px-2 text-sm text-gray-500">
										{formatDate(post.createdAt)}
									</p>
								</div>
								<br />
								<p className=" mb-2 sm:mb-8 text-sm sm:text-base font-normal text-gray-500 lg:text-base ">
									{post.content}
								</p>
							</div>
						</div>
					</section>
				)}
			</Modal>
		</>
	);
}
