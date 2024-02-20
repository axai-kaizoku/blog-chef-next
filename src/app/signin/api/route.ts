export async function POST(request: Request) {
	const { email, password } = await request.json();
	console.log(email, password);
	return Response.json({ email, password });
}
