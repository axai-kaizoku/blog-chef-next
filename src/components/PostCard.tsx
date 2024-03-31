'use client';
import { PostProps } from '@/types';
import formatDate from '@/utils/format-date';
import Link from 'next/link';

interface PostCardProps {
	post: PostProps;
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<div className="p-6 m-2 bg-white flex flex-col justify-between border border-gray-200 rounded-lg shadow w-96 h-64  sm:w-64">
			<div>
				<h5 className="text-xl font-bold tracking-tight text-gray-900 ">
					{post.title}
				</h5>
				<div className="flex flex-row justify-between mt-1 mb-3">
					<p className="text-xs font-normal">
						By {post.author.fname} {post.author.lname}
					</p>
					<p className="text-xs font-light">{formatDate(post.createdAt)}</p>
				</div>
				<p className="mb-3 font-normal text-gray-700 ">
					{post.content.slice(0, post.content.lastIndexOf(' ', 80)) + ' ...'}
				</p>
			</div>
			<Link
				href={`post/${post._id}`}
				className="inline-flex items-center w-fit px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 ">
				Read more
			</Link>
		</div>
	);
}
