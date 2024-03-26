import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: {
			type: ObjectId,
			ref: 'User',
			required: true,
		},
		isApproved: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true },
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);
