export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-80 h-52 bg-white rounded shadow-md hover:shadow-xl py-6 px-4 m-2">
			{children}
		</div>
	);
}
