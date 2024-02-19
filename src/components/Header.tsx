import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav
				className="bg-slate-200 shadow-lg w-full h-16 flex flex-row justify-between items-center "
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
						<Link href="/login">Login</Link>
					</li>
					<li>
						<Link href="/signup">Signup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
