export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
	lastLoggedIn: string;
};

export const users: User[] = [
	{
		id: '1',
		name: 'Axai Kaizoku',
		email: 'axai@gms.om',
		password: 'Hash',
		isAdmin: true,
		lastLoggedIn: '12th feb',
	},
	{
		id: '2',
		name: 'Lady Guinevere',
		email: 'lady@gms.om',
		password: 'Hash',
		isAdmin: false,
		lastLoggedIn: '21th feb',
	},
	{
		id: '3',
		name: 'Joyful Soul',
		email: 'joyful@gms.om',
		password: 'Hash',
		isAdmin: false,
		lastLoggedIn: '21th feb',
	},
];
