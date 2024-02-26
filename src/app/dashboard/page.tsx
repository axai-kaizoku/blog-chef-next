'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
	const [user, setUser] = useState({});
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();

	useEffect(() => {
		if (sessionStatus === 'unauthenticated') {
			router.replace('/signin');
		}
	}, [sessionStatus, router]);

	const getUser = async () => {
		const res = await fetch('/api/user');
		const data = res.json();
		setUser(data);
	};

	useEffect(() => {
		getUser();
	}, []);
	return (
		<>
			<div className="p-7 flex flex-row justify-between">
				<h1 className="text-3xl font-semibold ">Admin Dashboard</h1>

				<div>
					<p>{user.name}</p>
					<p className="text-xs font-extralight">
						Last logged: {user.createdAt}
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
		</>
	);
}
