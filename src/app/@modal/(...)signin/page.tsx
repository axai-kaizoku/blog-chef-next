'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import validateEmail from '@/utils/email-validate';
import useError from '@/hooks/use-error';
import Modal from '@/components/Modal';
import ModalCustomForm from '@/components/ModalCustomForm';

export default function ModalSignIn() {
	const router = useRouter();
	const session = useSession();
	const { error, setErrorMsg, clearError } = useError();
	const [isModalOpen, setIsModalOpen] = useState(true);

	const closeModal = () => {
		setIsModalOpen(false);
	};

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
		closeModal();
	};
	return (
		<>
			{isModalOpen && (
				<Modal modalClose={closeModal}>
					<ModalCustomForm
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
				</Modal>
			)}
		</>
	);
}
