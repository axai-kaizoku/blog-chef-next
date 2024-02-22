import { sign } from '../../helpers';

export async function POST(request: Request) {
	try {
		const { email, password, isAdmin } = await request.json();
		const user = {
			id: '13132',
			name: 'demo',
			email: email,
			isAdmin: false,
		};
		// password check
		// await password === "12345";
		const token = await sign({
			id: user.id,
			name: user.name,
			email: user.email,
		});

		const promise = {
			user: {
				id: '2',
				name: email,
				email: email,
			},
			token,
		};

		return new Response(JSON.stringify(promise), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.log(error);
		return Response.json({ message: 'Error logging in' });
	}
}
