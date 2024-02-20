export async function POST(request: Request) {
	const { name, email, password } = await request.json();
	console.log(name, email, password);
	return Response.json({ name, email, password });
}
