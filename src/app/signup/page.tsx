'use client';
import CustomForm from '@/components/CustomForm';
import { useRouter } from 'next/navigation';

export default function SignUp() {
	const router = useRouter();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const fname = e.target[0].value.trim();
		const lname = e.target[1].value.trim();
		const email = e.target[2].value.trim();
		const password = e.target[3].value.trim();

		const response = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify({ fname, lname, email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) router.push('/signin');
	};
	return (
		<CustomForm
			btnText="Sign Up"
			email={true}
			name={true}
			password={true}
			forgotPass={false}
			handleSubmit={handleSubmit}
			terms={true}
			blogTitle={false}
			blogContent={false}
			title="Create an Account"
			error=""
		/>
	);
}
