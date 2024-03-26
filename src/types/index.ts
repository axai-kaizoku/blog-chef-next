import { ReactNode } from 'react';

export interface ModalProps {
	children: ReactNode;
}

export interface CustomFormProps {
	title: string;
	handleSubmit: () => void;
	btnText: string;
	forgotPass: boolean;
	terms: boolean;
	name: boolean;
	email: boolean;
	password: boolean;
	blogTitle: boolean;
	blogContent: boolean;
	error: string;
}

export interface PostProps {
	id: string;
	title: string;
	content: string;
	author: string;
	createdAt: string;
}
