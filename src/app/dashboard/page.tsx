export default function Dashboard() {
	const user = true;
	return (
		<>
			<div className="p-7 flex flex-row justify-between">
				<h1 className="text-3xl font-semibold ">Dashboard</h1>

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
		</>
	);
}
