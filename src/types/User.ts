type User = {
	_id: string;
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
	lastLogin: Date;
};

export default User;
