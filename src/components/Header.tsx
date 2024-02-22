'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
	let value;
	if (typeof window !== 'undefined') {
		value = sessionStorage.getItem('auth') || null;
	}

	const [user, setUser] = useState(value);

	const handleLogout = () => {
		sessionStorage.removeItem('auth');
		setUser(null);
	};

	useEffect(() => {
		// Check if 'window' is defined (running in the browser)
		if (typeof window !== 'undefined') {
			const storedUser = sessionStorage.getItem('auth');
			setUser(storedUser);
		}
	}, []);

	return (
		<header>
			<nav
				className="flex flex-row items-center justify-between w-full h-16 shadow-lg bg-slate-200 "
				id="nav">
				<h3>
					<Link
						className="px-4 text-xl font-bold"
						href="/">
						BlogChef.
					</Link>
				</h3>
				<ul className="flex flex-row gap-8">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/new-post">New Post</Link>
					</li>
				</ul>
				<ul className="flex flex-row gap-8 mx-8">
					{user ? (
						<li>
							<Link href="/dashboard">Dashboard</Link>
						</li>
					) : (
						<></>
					)}
					{!user ? (
						<>
							<li>
								<Link href="/signin">Signin</Link>
							</li>
							<li>
								<Link href="/signup">Signup</Link>
							</li>
						</>
					) : (
						<>
							<li onClick={() => handleLogout()}>
								<Link href="/">Logout</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}
