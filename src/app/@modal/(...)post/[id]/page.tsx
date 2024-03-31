'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import formatDate from '@/utils/format-date';
import Modal from '@/components/Modal';

export default function ModalPost() {
	const params = useParams();
	const [load, setLoad] = useState(false);
	const [post, setPost] = useState({
		title: '',
		author: {
			fname: '',
			lname: '',
		},
		createdAt: '',
		content: '',
	});
	const fetchPost = async () => {
		setLoad(true);
		const response = await fetch(`/api/post/${params.id}`);
		const data = await response.json();
		setPost(data);
		setLoad(false);
	};

	useEffect(() => {
		fetchPost();
	}, []);
	return (
		<Modal modalClose={() => {}}>
			{!load ? (
				<section className="w-full h-fit">
					<div className="max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-2 lg:gap-16">
						<div className="flex flex-col justify-center">
							<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
								{post.title}
							</h1>
							<p className="px-2 text-sm text-gray-500">
								By {post.author.fname} {post.author.lname}
							</p>
							<p className="px-2 text-sm text-gray-500">
								{formatDate(post.createdAt)}
							</p>
							<br />
							<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">
								{`${post.content}`}
							</p>
						</div>
					</div>
				</section>
			) : (
				<div className="flex flex-row justify-center items-center w-full h-[50vh] ">
					<div className="w-9 h-9 border-t-8 rounded-full border-8 border-t-slate-500 border-gray-300 animate-spin"></div>
				</div>
			)}
		</Modal>
	);
}
