import Card from '@/components/Card';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div className="p-7">
				<h1 className=" font-semibold text-3xl">Welcome to Blog Chef.</h1>
				<p>Tech and Trendy Blogs</p>
			</div>
			<div className="flex justify-center items-center">
				<div className=" w-full mx-5 border "></div>
			</div>
			<div className="w-full h-0 flex justify-center items-center">
				<div className="w-11/12 h-full p-8 flex flex-row  justify-center">
					<div className="w-full h-full m-8 flex flex-row flex-wrap">
						<Link href="/post/1">
							<Card>
								<h1 className="text-xl font-medium">Next is future Web</h1>
								<div className="flex flex-row justify-between">
									<p className="text-xs">By Dan Jeo</p>
									<p className="text-xs">19th Feb</p>
								</div>
								<br />
								<p className="text-sm">
									magnet lovely gentle box door gather distance tight younger
									eager screen remember college independent table roar instead
									history halfway instant game air breathe quickly eager magnet
									lovely .....
								</p>
							</Card>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
