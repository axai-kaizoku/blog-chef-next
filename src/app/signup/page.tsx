'use client';
import CustomForm from '@/components/CustomForm';

export default function SignUp() {
	return (
		<CustomForm
			btnText="Sign Up"
			email={true}
			name={true}
			password={true}
			forgotPass={false}
			handleSubmit={() => console.log('Signup')}
			terms={true}
			blogTitle={false}
			blogContent={false}
			title="Create an Account"
			error=""
		/>
	);
}
