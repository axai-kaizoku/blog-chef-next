'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
	const router = useRouter();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const createUser = async () => {
		const newUser = { name, email, password };
		const response = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) router.push('/signin');
	};

	return (
		<>
			<section className="bg-gray-50 ">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Sign up for an account
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={(e) => {
									e.preventDefault();
									createUser();
								}}>
								<div>
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Your name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Dan Jeo"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="name@example.com"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
									/>
								</div>

								<button
									type="submit"
									className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Sign up
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
