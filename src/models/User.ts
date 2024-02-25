import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		lastLogin: {
			type: Date,
			default: new Date(),
		},
	},
	{ timestamps: true },
);

userSchema.pre('save', async function (next) {
	const currentDate = new Date();
	this.lastLogin = currentDate;
	next();
});

export default mongoose.models.User || mongoose.model('User', userSchema);
