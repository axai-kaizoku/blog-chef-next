'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
	const { data: session }: any = useSession();
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
						{session ? (
							<>
								<li>
									<Link href="/dashboard">Dashboard</Link>
								</li>
								<li onClick={() => signOut()}>
									<Link href="/">Logout</Link>
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
