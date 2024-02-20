export async function POST(request: Request) {
	const { email, password, isAdmin } = await request.json();
	const message = isAdmin ? 'Admin logged In' : 'Normal user logged In';
	console.log(email, password, isAdmin);
	return Response.json({ email, password, isAdmin, message });
}
