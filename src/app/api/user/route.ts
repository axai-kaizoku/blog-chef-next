import User from '@/models/User';
import { Session } from 'next-auth';

export async function GET(request: any) {
	// try {
	// 	// If authenticated, proceed with fetching user data
	// 	const user = User.find();

	// 	return Response.json({ user, session });
	// } catch (error) {
	// 	console.error('Error fetching user data:', error);
	// 	return Response.json({ error: 'Internal server error' });
	// }
	return new Response('HELLO');
}
