'use client';
import DeleteBtn from '@/components/DeleteBtn';

export default function Users() {
	return (
		<div>
			<h1 className="text-xl font-bold">Users</h1>
			<div className="border rounded border-gray-600"></div>
			<ul className="flex flex-col m-4">
				<li className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
					<div>
						<p>Dan Joe</p>
						<p className="text-sm">dan@jow@co.on</p>
					</div>
					<div>
						<p className="text-xs my-2">
							<DeleteBtn
								btnSize={12}
								btnName="Approve Admin?"
								onDelete={() => console.log('Approved Admin')}
							/>
						</p>
					</div>
				</li>
				<li className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
					<p>
						<p>Joe Mockery</p>
						<p className="text-sm">jeo@mockery@co.on</p>
					</p>
					<p className="text-sm">Admin: true</p>
				</li>
			</ul>
		</div>
	);
}
