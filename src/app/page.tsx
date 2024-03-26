import Link from 'next/link';

export default function Home() {
	return (
		<main>
			Blog Chef
			<Link href="/post/2">Post</Link>
		</main>
	);
}
