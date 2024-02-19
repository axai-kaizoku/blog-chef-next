export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-6 m-4 bg-white border border-gray-200 rounded-lg shadow max-w-72">
			{children}
		</div>
	);
}
