import connect from '@/utils/db';
import User from '@/models/User';

export async function GET() {
	await connect();
	try {
		const users = await User.find();
		return Response.json(users, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
