'use client';
import { CustomFormProps } from '@/types';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';

export default function CustomForm({
	title,
	handleSubmit,
	btnText,
	forgotPass,
	terms,
	name,
	email,
	password,
	blogTitle,
	blogContent,
	error,
}: CustomFormProps) {
	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							{title}
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit}>
							{blogTitle && (
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
							)}
							{blogContent && (
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
							)}
							{name && (
								<div className="flex gap-8">
									<div>
										<label
											htmlFor="fname"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Your first name
										</label>
										<input
											type="text"
											name="fname"
											id="fname"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder="John"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="lname"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Your last name
										</label>
										<input
											type="text"
											name="lname"
											id="lname"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder="Deo"
											required
										/>
									</div>
								</div>
							)}
							{email && (
								<div>
									<label
										htmlFor="signinEmail"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="signinEmail"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="name@example.com"
										required
									/>
								</div>
							)}
							{password && (
								<div>
									<label
										htmlFor="signinPassword"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="signinPassword"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
									/>
								</div>
							)}

							<div className="flex items-center justify-between">
								{forgotPass && (
									<Link
										href="#"
										className="text-sm font-medium text-primary-600 hover:underline ">
										Forgot password?
									</Link>
								)}
								{terms && (
									<div className="flex items-center space-x-2">
										<Checkbox id="terms2" />
										<label
											htmlFor="terms2"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
											Accept terms and conditions
										</label>
									</div>
								)}
							</div>
							<div>
								<span className="text-red-500">{error}</span>
							</div>
							<button
								type="submit"
								className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
								{btnText}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
