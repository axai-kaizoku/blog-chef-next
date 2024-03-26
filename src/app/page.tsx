import PostCard from '@/components/PostCard';

const posts = [
	{
		id: '1',
		title: 'Zod',
		content: `ZA few days ago Zed a new code editor was made open source. Built by
		people of atom editor. It is a powerful code editor that is coming
		along with vs code in performance.Vs code has been most popular for
		almost 10 years now. Let's watch zed take on the realm for a while,
		but it is currently avaliable for macos. *$*%`,
		createdAt: '27 March 2024',
		author: 'Luffy',
	},
	{
		id: '2',
		title: 'Gear 5',
		content: `A few days ago Zed a new code editor was made open source. Built by
		people of atom editor. It is a powerful code editor that is coming
		along with vs code in performance.Vs code has been most popular for
		almost 10 years now. Let's watch zed take on the realm for a while,
		but it is currently avaliable for macos. *$*%`,
		createdAt: '27 April 2023',
		author: 'Stewie',
	},
	{
		id: '3',
		title: 'Gemini',
		content: `A few days ago Zed a new code editor was made open source. Built by
		people of atom editor. It is a powerful code editor that is coming
		along with vs code in performance.Vs code has been most popular for
		almost 10 years now. Let's watch zed take on the realm for a while,
		but it is currently avaliable for macos. *$*%`,
		createdAt: '30 March 2024',
		author: 'Peter',
	},
	{
		id: '4',
		title: 'Gemini',
		content: `A few days ago Zed a new code editor was made open source. Built by
		people of atom editor. It is a powerful code editor that is coming
		along with vs code in performance.Vs code has been most popular for
		almost 10 years now. Let's watch zed take on the realm for a while,
		but it is currently avaliable for macos. *$*%`,
		createdAt: '30 March 2024',
		author: 'Peter',
	},
	{
		id: '5',
		title: 'Gemini',
		content: `A few days ago Zed a new code editor was made open source. Built by
		people of atom editor. It is a powerful code editor that is coming
		along with vs code in performance.Vs code has been most popular for
		almost 10 years now. Let's watch zed take on the realm for a while,
		but it is currently avaliable for macos. *$*%`,
		createdAt: '30 March 2024',
		author: 'Peter',
	},
	{
		id: '6',
		title: 'Gemini',
		content: `A few days ago Zed a new code editor was made open source. Built by
		people of atom editor. It is a powerful code editor that is coming
		along with vs code in performance.Vs code has been most popular for
		almost 10 years now. Let's watch zed take on the realm for a while,
		but it is currently avaliable for macos. *$*%`,
		createdAt: '30 March 2024',
		author: 'Peter',
	},
];

export default function Home() {
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
				{posts.map((post) => (
					<PostCard
						post={post}
						key={post.id}
					/>
				))}
			</div>
		</>
	);
}
