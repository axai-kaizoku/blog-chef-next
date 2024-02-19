import Card from '@/components/Card';
import Link from 'next/link';
import posts from './data';

export default function Home() {
	const user = true;
	return (
		<>
			<div className="p-7">
				<h1 className=" font-semibold text-3xl">Welcome to BlogChef.</h1>
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
			<div className="flex justify-center items-center">
				<div className=" w-full mx-5 border "></div>
			</div>
			<div className="w-full h-0 flex justify-center items-center">
				<div className="w-11/12 h-full p-8 flex flex-row  justify-center">
					<div className="w-full h-full m-8 flex flex-row flex-wrap">
						{posts.map(({ id, title, author, createdAt, content }) => (
							<Link
								key={id}
								href={`post/${id}`}>
								<Card>
									<h1 className="text-xl font-medium">{title}</h1>
									<div className="flex flex-row justify-between">
										<p className="text-xs">By {author}</p>
										<p className="text-xs">{createdAt}</p>
									</div>
									<br />
									<p className="text-sm">
										{content.slice(0, content.lastIndexOf(' ', 160)) + ' ...'}
									</p>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
