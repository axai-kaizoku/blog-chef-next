'use client';
import DeleteBtn from '@/components/DeleteBtn';
import Link from 'next/link';

export default function UserDashboard() {
	const user = true;
	return (
		<>
			<div className="p-7 flex flex-row justify-between">
				<h1 className="text-3xl font-semibold ">User Dashboard</h1>

				{user ? (
					<div>
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
			<div className="w-full h-5/6 flex flex-row justify-center items-center">
				<div className=" w-11/12 h-full flex flex-row justify-between p-6">
					<div className=" bg-slate-50  shadow-lg w-11/12 p-3 rounded">
						<div>
							<h1 className="text-xl font-bold">Posts</h1>
							<div className="border rounded border-gray-600"></div>
							<ul className="flex flex-col m-4">
								<li className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
									<p className="w-4/5">
										<p className="font-medium">React is slow?</p>
										<p className="text-sm ">
											correct lonely lack outside shout useful chair kept
											passage face give ride scene pair pictured forgotten slept
											greatly shoot where yes hurry regular student
										</p>
									</p>
									<button className="w-1/12">
										<Link href="/dashboard/edit-post">Edit</Link>
									</button>
									<button className="w-1/12 mx-2">
										<DeleteBtn
											btnSize={13}
											btnName="Delete"
											onDelete={() => {
												console.log('Deleted');
											}}
										/>
									</button>
								</li>
								<li className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
									<p className="w-4/5">
										<p className="font-medium">Typescript sucks!</p>
										<p className="text-sm ">
											correct lonely lack outside shout useful chair kept
											passage face give ride scene pair pictured forgotten slept
											greatly shoot where yes hurry regular student
										</p>
									</p>
									<button className="w-1/12">Edit</button>
									<button className="w-1/12">Delete</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
