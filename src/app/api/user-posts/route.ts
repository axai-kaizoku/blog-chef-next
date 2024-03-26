import { getServerSession } from 'next-auth';
import connect from '@/utils/database';
import User from '@/models/User';
import Post from '@/models/Post';

export async function GET() {
	try {
		const session = await getServerSession();
		if (!session) {
			return Response.json({ error: 'Unauthorized' });
		}
		await connect();
		const user = await User.findOne({ email: session.user?.email });
		const posts = await Post.find({ author: user?._id }).sort({
			createdAt: -1,
		});
		return Response.json(posts, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
