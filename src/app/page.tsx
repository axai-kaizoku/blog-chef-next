// 'use client';
import PostCard from '@/components/PostCard';
import fetchPosts from '@/utils/fetch-posts';
// import { useEffect, useState } from 'react';

// const posts = [
// 	{
// 		_id: '2',
// 		id: '1',
// 		title: 'Zod',
// 		content: `ZA few days ago Zed a new code editor was made open source. Built by
// 		people of atom editor. It is a powerful code editor that is coming
// 		along with vs code in performance.Vs code has been most popular for
// 		almost 10 years now. Let's watch zed take on the realm for a while,
// 		but it is currently avaliable for macos. *$*%`,
// 		createdAt: '27 March 2024',
// 		author: 'Luffy',
// 	},
// 	{
// 		_id: '2',
// 		id: '2',
// 		title: 'Gear 5',
// 		content: `A few days ago Zed a new code editor was made open source. Built by
// 		people of atom editor. It is a powerful code editor that is coming
// 		along with vs code in performance.Vs code has been most popular for
// 		almost 10 years now. Let's watch zed take on the realm for a while,
// 		but it is currently avaliable for macos. *$*%`,
// 		createdAt: '27 April 2023',
// 		author: 'Stewie',
// 	},
// 	{
// 		_id: '2',
// 		id: '3',
// 		title: 'Gemini',
// 		content: `A few days ago Zed a new code editor was made open source. Built by
// 		people of atom editor. It is a powerful code editor that is coming
// 		along with vs code in performance.Vs code has been most popular for
// 		almost 10 years now. Let's watch zed take on the realm for a while,
// 		but it is currently avaliable for macos. *$*%`,
// 		createdAt: '30 March 2024',
// 		author: 'Peter',
// 	},
// 	{
// 		_id: '2',
// 		id: '4',
// 		title: 'Gemini',
// 		content: `A few days ago Zed a new code editor was made open source. Built by
// 		people of atom editor. It is a powerful code editor that is coming
// 		along with vs code in performance.Vs code has been most popular for
// 		almost 10 years now. Let's watch zed take on the realm for a while,
// 		but it is currently avaliable for macos. *$*%`,
// 		createdAt: '30 March 2024',
// 		author: 'Peter',
// 	},
// 	{
// 		_id: '2',
// 		id: '5',
// 		title: 'Gemini',
// 		content: `A few days ago Zed a new code editor was made open source. Built by
// 		people of atom editor. It is a powerful code editor that is coming
// 		along with vs code in performance.Vs code has been most popular for
// 		almost 10 years now. Let's watch zed take on the realm for a while,
// 		but it is currently avaliable for macos. *$*%`,
// 		createdAt: '30 March 2024',
// 		author: 'Peter',
// 	},
// 	{
// 		_id: '2',
// 		id: '6',
// 		title: 'Gemini',
// 		content: `A few days ago Zed a new code editor was made open source. Built by
// 		people of atom editor. It is a powerful code editor that is coming
// 		along with vs code in performance.Vs code has been most popular for
// 		almost 10 years now. Let's watch zed take on the realm for a while,
// 		but it is currently avaliable for macos. *$*%`,
// 		createdAt: '30 March 2024',
// 		author: 'Peter',
// 	},
// ];

export default async function Home() {
	// const res =  fetchPosts();
	// const posts =  res.json();
	// const [posts, setPosts] = useState([]);
	// const fetchPost = async () => {
	// 	const response = await fetch('/api/posts');
	// 	const data = await response.json();
	// 	return data;
	// };
	const posts = await fetchPosts();
	// useEffect(() => {
	// 	fetchPost();
	// }, []);
	const isDataEmpty = !Array.isArray(posts) || posts.length < 1 || !posts;
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
			{/* Posts Section */}
			<div className="flex flex-wrap gap-3 w-full min-h-[70vh] py-8 px-16">
				{!isDataEmpty &&
					posts.map((post) => (
						<PostCard
							post={post}
							key={post._id}
						/>
					))}
			</div>
		</>
	);
}
