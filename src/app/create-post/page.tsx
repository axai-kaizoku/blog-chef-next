'use client';
import CustomForm from '@/components/CustomForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useError from '@/hooks/use-error';

export default function CreatePost() {
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();
	const { error, setErrorMsg, clearError } = useError();

	useEffect(() => {
		if (sessionStatus === 'unauthenticated') {
			router.replace('/signin');
		}
	}, [sessionStatus, router]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		clearError();

		const title = e.target[0].value.trim();
		const content = e.target[1].value;

		if (title.length < 4) {
			setErrorMsg('Title should have a minimum length of 4 characters.');
			return;
		}

		if (content.length < 200 && content.length > 400) {
			setErrorMsg('Content should be between 50 and 120 words.');
			return;
		}

		try {
			const res = await fetch('/api/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					content,
					author: session?.user?.name,
				}),
			});
			if (res.status === 201) {
				router.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (sessionStatus === 'loading') {
		return <h1>Loading....</h1>;
	}

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
			error={error}
		/>
	);
}
