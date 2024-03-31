'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
	const { data: session }: any = useSession();
	return (
		<header>
			<nav
				className="flex flex-col items-center justify-between w-full h-auto sm:flex-row sm:h-16 shadow-lg bg-slate-200"
				id="nav">
				<h3 className="text-5xl font-bold py-8 sm:px-4 sm:text-xl">
					<Link
						href="/"
						className="px-8 text-3xl">
						BlogChef.
					</Link>
				</h3>
				<div className="flex flex-row sm:flex-row sm:gap-8">
					<ul className="flex flex-row py-4 sm:flex-row sm:gap-8 sm:mx-8 ">
						<li className="px-2 text-sm sm:py-0 sm:text-lg">
							<Link href="/">Home</Link>
						</li>
						<li className="px-2 text-sm sm:py-0 sm:text-lg">
							<Link href="/create-post">New Post</Link>
						</li>
					</ul>
					<ul className="flex flex-row py-4 sm:flex-row sm:gap-8 sm:mx-8">
						{!session ? (
							<>
								<li className="px-2 text-sm sm:py-0 sm:text-lg">
									<Link href="/signin">Signin</Link>
								</li>
								<li className="px-2 text-sm sm:py-0 sm:text-lg">
									<Link href="/signup">Signup</Link>
								</li>
							</>
						) : (
							<>
								<li className="px-2 text-sm sm:py-0 sm:text-lg">
									<Link href="/dashboard">Dashboard</Link>
								</li>
								<li
									onClick={() => signOut()}
									className="px-2 text-sm sm:py-0 sm:text-lg">
									<Link href="/">Logout</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
}
