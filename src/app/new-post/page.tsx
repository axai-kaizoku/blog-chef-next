'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useError from '@/hooks/use-error';

export default function CreatePost() {
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();
	const { error, setErrorMsg, clearError } = useError();

	useEffect(() => {
		if (sessionStatus === 'unauthenticated') {
			router.replace('/signin');
		}
	}, [sessionStatus, router]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		clearError();

		const title = e.target[0].value.trim();
		const content = e.target[1].value;

		if (title.length < 4) {
			setErrorMsg('Title should have a minimum length of 4 characters.');
			return;
		}

		if (content.length < 200 && content.length > 400) {
			setErrorMsg('Content should be between 50 and 120 words.');
			return;
		}

		try {
			const res = await fetch('/api/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					content,
					author: session?.user?.name,
				}),
			});
			if (res.status === 201) {
				router.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (sessionStatus === 'loading') {
		return <h1>Loading....</h1>;
	}

	return (
		<>
			<section className="bg-gray-50 ">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Create a Blog Post
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="title"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Title
									</label>
									<input
										type="text"
										name="title"
										id="title"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Title"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Content
									</label>
									<textarea
										id="message"
										rows={3}
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
										placeholder="Content goes here..."
									/>
								</div>
								<div>
									<span className="text-red-500">{error}</span>
								</div>
								<button
									type="submit"
									className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Post
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
