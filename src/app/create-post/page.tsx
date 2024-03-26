'use client';
import CustomForm from '@/components/CustomForm';

export default function CreatePost() {
	return (
		<CustomForm
			blogContent={true}
			blogTitle={true}
			btnText="Post"
			email={false}
			forgotPass={false}
			handleSubmit={() => console.log('create-post')}
			name={false}
			password={false}
			terms={false}
			title="Create a Blog Post"
			error=""
		/>
	);
}
