export default function DashboardLayout({
	children,
	users,
	posts,
	user,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	posts: React.ReactNode;
	user: React.ReactNode;
}) {
	const isLoggedIn = true;
	const isAdmin = true;

	return isLoggedIn && isAdmin ? (
		<div>
			{children}
			<div className="w-full h-5/6 flex flex-row justify-center items-center">
				<div className=" w-11/12 h-full flex flex-row justify-between p-6">
					<div className=" bg-slate-50  shadow-lg w-3/5 p-3 rounded">
						{posts}
					</div>
					<div className=" bg-slate-50 shadow-lg w-1/3 p-3 rounded">
						{users}
					</div>
				</div>
			</div>
		</div>
	) : isLoggedIn && !isAdmin ? (
		<div>{user}</div>
	) : (
		<div className="w-full h-full flex flex-row justify-center items-center">
			<h1 className="mb-4 text-4xl font-thin leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
				Redirecting to login page ...
			</h1>
		</div>
	);
}
