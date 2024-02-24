import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

import { getServerSession } from 'next-auth';

import AuthProvider from '@/utils/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BlogChef',
	description: 'Basic Blog App created using Next',
};

export default async function RootLayout(props: {
	// modal: React.ReactNode;
	children: React.ReactNode;
}) {
	const session = await getServerSession();
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider session={session}>
					<Header />
					<main className="w-full h-screen bg-slate-50 ">
						{/* {props.modal} */}
						{props.children}
					</main>
				</AuthProvider>
			</body>
		</html>
	);
}
