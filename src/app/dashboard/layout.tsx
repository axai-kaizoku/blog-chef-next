export default function DashboardLayout({
	children,
	users,
	posts,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	posts: React.ReactNode;
}) {
	return (
		<>
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
		</>
	);
}
