import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BlogChef',
	description: 'Basic Blog App created using Next',
};

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main className="w-full h-screen bg-slate-50 ">
					{modal}
					{children}
				</main>
			</body>
		</html>
	);
}
