'use client';
import CustomForm from '@/components/CustomForm';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import validateEmail from '@/utils/email-validate';
import useError from '@/hooks/use-error';

export default function SignIn() {
	const router = useRouter();
	const session = useSession();
	const { error, setErrorMsg, clearError } = useError();

	useEffect(() => {
		if (session?.status === 'authenticated') {
			router.replace('/');
		}
	}, [session, router]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		if (!validateEmail(email)) {
			setErrorMsg('Invalid Email address');
			return;
		}

		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		if (res?.error) {
			setErrorMsg('Invalid email or password');
			return;
		}

		if (res?.ok) router.replace('/');
		router.refresh();
	};
	return (
		<CustomForm
			title="Sign in to your account"
			handleSubmit={handleSubmit}
			btnText="Sign In"
			forgotPass={true}
			terms={false}
			name={false}
			email={true}
			password={true}
			blogTitle={false}
			blogContent={false}
			error={error}
		/>
	);
}
