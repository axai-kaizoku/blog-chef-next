import { users } from '../users';

export async function GET(request: Request) {
	return Response.json(users);
}
