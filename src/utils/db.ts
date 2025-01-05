import mongoose from 'mongoose';
const connect = async () => {
	if (mongoose.connections[0].readyState) return;

	try {
		const mongoUrl = process.env.MONGODB_URL;
		if (!mongoUrl) {
			throw new Error('MONGODB_URL is not defined');
		}
		await mongoose.connect(mongoUrl);
		console.log('Mongo connection successfully established');
	} catch (error) {
		throw new Error('Error connecting to Mongoose');
	}
};

export default connect;
