export default function Posts() {
	return (
		<div>
			<h1 className="text-xl font-bold">Posts</h1>
			<div className="border rounded border-gray-600"></div>
			<ul className="flex flex-col m-4">
				<li className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
					<p className="w-4/5">
						<p className="font-medium">React is slow?</p>
						<p className="text-sm ">
							correct lonely lack outside shout useful chair kept passage face
							give ride scene pair pictured forgotten slept greatly shoot where
							yes hurry regular student
						</p>
					</p>
					<p className="text-xs w-2/12">Dan Joe</p>
				</li>
				<li className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
					<p className="w-4/5">
						<p className="font-medium">Typescript sucks!</p>
						<p className="text-sm ">
							correct lonely lack outside shout useful chair kept passage face
							give ride scene pair pictured forgotten slept greatly shoot where
							yes hurry regular student
						</p>
					</p>
					<p className="text-xs w-2/12">Dan Joe</p>
				</li>
			</ul>
		</div>
	);
}
