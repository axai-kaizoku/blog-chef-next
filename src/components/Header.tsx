'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const login = false;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="w-full h-16 bg-slate-200">
			<nav className="flex items-center justify-between px-20 py-4 max-md:flex-col">
				<div className="text-3xl font-semibold text-black">
					<Link href="/">BlogChef.</Link>
				</div>
				<div className="flex justify-between w-2/4">
					<ul className="flex gap-8">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/create-post">New Post</Link>
						</li>
					</ul>
					<ul className="flex gap-8">
						{login ? (
							<>
								<li>
									<Link href="/dashboard">Dashboard</Link>
								</li>
								<li>
									<Link href="/logout">Logout</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link href="/signin">Sign In</Link>
								</li>
								<li>
									<Link href="/signup">Sign Up</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
}
