'use client';
import CustomForm from '@/components/CustomForm';

export default function CreatePost() {
	const handleSubmit = async (e: any) => {};
	return (
		<CustomForm
			blogContent={true}
			blogTitle={true}
			btnText="Post"
			email={false}
			forgotPass={false}
			handleSubmit={handleSubmit}
			name={false}
			password={false}
			terms={false}
			title="Create a Blog Post"
			error=""
		/>
	);
}
