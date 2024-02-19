import Link from 'next/link';

export default function Header() {
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
					<li>
						<Link href="/signin">Signin</Link>
					</li>
					<li>
						<Link href="/signup">Signup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
