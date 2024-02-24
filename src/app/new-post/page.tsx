import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function CreatePost() {
	const session = await getServerSession();
	if (!session) {
		redirect('/signin');
	}

	const savePost = async () => {
		// const newPost = { title, content };
		// const response = await fetch('/posts/api', {
		// 	method: 'POST',
		// 	body: JSON.stringify(newPost),
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// });
		// if (response.ok) router.push('/');
	};

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
								action="#">
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
										// value={title}
										// onChange={(e) => setTitle(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Bard is now Gemini"
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
										rows={2}
										// value={content}
										// onChange={(e) => setContent(e.target.value)}
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
										placeholder="Content goes here..."
									/>
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
