import jwt from 'jsonwebtoken';

export const sign = (obj: { id: string; name: string; email: string }) =>
	new Promise((resolve, reject) => {
		jwt.sign(obj, 'hellojwt', (error, token) => {
			if (error) return reject(error);

			return resolve(token);
		});
	});

export const verify = (token: string) =>
	new Promise((resolve, reject) => {
		jwt.verify(token, 'hellojwt', (error) => {
			if (error) return reject();
			return resolve;
		});
	});

export const verifyToken = async (token: string) => {
	try {
		const user = jwt.decode(token);
		//find user
		const findUser = true;
		if (!findUser) {
			return Promise.reject({ error: 'Unauthorized' });
		}
		await verify(token);
		return Promise.resolve();
	} catch (error) {
		return Promise.reject({ error: 'Unauthorized' });
	}
};

export const verifyUser = (email: string) =>
	new Promise((resolve, reject) => {
		try {
			//find user
			const user = true;
			return resolve(user ? true : false);
		} catch (error) {
			return reject(false);
		}
	});
