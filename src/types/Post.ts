import User from './User';

type Post = {
	_id: string;
	title: string;
	content: string;
	author: User;
	isApproved: boolean;
	createdAt: Date;
};

export default Post;
