'use client';
import CustomForm from '@/components/CustomForm';

export default function SignIn() {
	return (
		<CustomForm
			title="Sign in to your account"
			handleSubmit={() => console.log('Submit')}
			btnText="Sign In"
			forgotPass={true}
			terms={false}
			name={false}
			email={true}
			password={true}
			blogTitle={false}
			blogContent={false}
			error=""
		/>
	);
}
