'use client';
import { useRouter } from 'next/navigation';
import useError from '@/hooks/use-error';
import validateEmail from '@/utils/email-validate';

export default function Signup() {
	const router = useRouter();
	const { error, setErrorMsg, clearError } = useError();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		clearError();

		const name = e.target[0].value.trim();
		const email = e.target[1].value.trim();
		const password = e.target[2].value.trim();

		if (name.length < 3) {
			setErrorMsg('Name must be at least 3 characters long.');
			return;
		}
		if (!validateEmail(email)) {
			setErrorMsg('Invalid Email address.');
			return;
		}
		if (password.length < 6) {
			setErrorMsg('Password must be at least 6 characters long.');
			return;
		}

		const response = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.status === 400) {
			setErrorMsg('Email is already in use');
			return;
		}
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
								onSubmit={handleSubmit}>
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
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
									/>
								</div>
								<div>
									<span className="text-red-500">{error}</span>
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
