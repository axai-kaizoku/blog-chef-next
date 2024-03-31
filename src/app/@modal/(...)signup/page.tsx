'use client';
import Modal from '@/components/Modal';
import ModalCustomForm from '@/components/ModalCustomForm';
import useError from '@/hooks/use-error';
import validateEmail from '@/utils/email-validate';
import { useRouter } from 'next/navigation';

export default function ModalSignUp() {
	const router = useRouter();
	const { error, setErrorMsg, clearError } = useError();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		clearError();
		const fname = e.target[0].value.trim();
		const lname = e.target[1].value.trim();
		const email = e.target[2].value.trim();
		const password = e.target[3].value.trim();
		const terms = e.target[4].checked;

		if (fname.length < 3) {
			setErrorMsg('Name must be at least 3 characters long.');
			return;
		}
		if (lname.length < 1) {
			setErrorMsg('Name must be at least 3 characters long.');
			return;
		}
		if (!validateEmail(email)) {
			setErrorMsg('Invalid Email address.');
			return;
		}
		if (password.length < 6) {
			setErrorMsg('Password must be at least 6 characters long.');
			return;
		}
		if (!terms) {
			setErrorMsg('Please accept the terms and conditions');
			return;
		}

		const response = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify({ fname, lname, email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 400) {
			setErrorMsg('Email is already in use');
			return;
		}

		if (response.ok) router.push('/signin');
	};
	return (
		<Modal>
			<ModalCustomForm
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
				error={error}
			/>
		</Modal>
	);
}
