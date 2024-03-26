import Link from 'next/link';

export default function PostCard() {
	return (
		<div className="p-6 m-4 bg-white border border-gray-200 rounded-lg shadow w-96  sm:w-64">
			<h5 className="text-xl font-bold tracking-tight text-gray-900 ">
				Gemini
			</h5>
			<div className="flex flex-row justify-between mt-1 mb-3">
				<p className="text-xs font-normal">By stuwie</p>
				<p className="text-xs font-light">27 Feb 2024</p>
			</div>
			<p className="mb-3 font-normal text-gray-700 ">
				Gemini vs Chat GPT Who wins !!
			</p>
			<Link
				href={`post/2`}
				className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 ">
				Read more
			</Link>
		</div>
	);
}
