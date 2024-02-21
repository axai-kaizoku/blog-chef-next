'use client';
import DeleteBtn from '@/components/DeleteBtn';
import { useEffect, useState } from 'react';
import { User } from '@/app/users/users';

export default function Users() {
	const [users, setUsers] = useState([]);

	const getAllUsers = async () => {
		const response = await fetch('/users/api');
		const data = await response.json();
		setUsers(data);
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<div>
			<h1 className="text-xl font-bold">Users</h1>
			<div className="border rounded border-gray-600"></div>
			<ul className="flex flex-col m-4">
				{users.map((user: User) => (
					<li
						key={user.id}
						className="py-2 px-1 rounded bg-slate-100 m-1 flex flex-row justify-between items-center">
						<div>
							<p>{user.name}</p>
							<p className="text-sm">{user.email}</p>
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
				))}
			</ul>
		</div>
	);
}
