'use client';
import Post from '@/types/Post';
import DeleteBtn from '@/components/DeleteBtn';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useUser from '@/hooks/use-user';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import formatDate from '@/utils/format-date';

export default function UserDashboard() {
	const { data: session, status: sessionStatus } = useSession();
	const user = useUser();
	const [posts, setPosts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		if (sessionStatus === 'unauthenticated') {
			router.replace('/signin');
		}
	}, [sessionStatus, router]);

	const getPosts = async () => {
		const res = await fetch('/api/user-posts');
		const data = await res.json();
		// console.log(data);
		setPosts(data);
	};

	const deletePost = async (id: string) => {
		const res = await fetch(`/api/post/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (res.status === 200) {
			router.replace('/');
		} else {
			console.log('error occurred while deleting');
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<>
			<div className="p-7 flex flex-row justify-between">
				<h1 className="text-3xl font-semibold ">User Dashboard</h1>
				{user && (
					<div>
						<p>{user.name}</p>
						<p className="text-xs font-extralight">
							Last logged: {formatDate(user.updatedAt)}
						</p>
					</div>
				)}
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
			<div className="w-full h-5/6 flex flex-row justify-center items-center">
				<div className=" w-11/12 h-full flex flex-row justify-between p-6">
					<div className=" bg-slate-50  shadow-lg w-11/12 p-3 rounded">
						<div>
							<h1 className="text-xl font-bold">Posts</h1>
							<div className="border rounded border-gray-600"></div>
							<ul className="flex flex-col m-4">
								{posts.length > 0 ? (
									posts.map((post: Post) => (
										<li
											key={post._id}
											className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
											<p className="w-4/5">
												<p className="font-medium">{post.title}</p>
												<p className="text-sm ">
													{post.content.slice(
														0,
														post.content.lastIndexOf(' ', 50),
													) + ' ...'}
												</p>
											</p>
											<button className="w-1/12">
												<Link href={`/dashboard/edit-post/${post._id}`}>
													Edit
												</Link>
											</button>
											<button className="w-1/12 mx-2">
												<DeleteBtn
													btnSize={13}
													btnName="Delete"
													onDelete={() => deletePost(post._id)}
												/>
											</button>
										</li>
									))
								) : (
									<li className="text-center text-xl">No posts yet!</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
