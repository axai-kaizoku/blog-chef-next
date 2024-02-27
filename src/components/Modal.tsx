'use client';
import {
	useCallback,
	useRef,
	useEffect,
	MouseEventHandler,
	ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface ModalProps {
	route?: string;
	children: ReactNode;
}

export default function Modal({ route = '', children }: ModalProps) {
	const overLay = useRef(null);
	const wrapper = useRef(null);
	const router = useRouter();

	const onDismiss = useCallback(() => {
		if (route === '') {
			router.back();
			router.refresh();
		} else {
			router.push(`${route}`);
			router.refresh();
		}
	}, [router, route]);

	const onClick: MouseEventHandler = useCallback(
		(e) => {
			if (e.target === overLay.current || e.target === wrapper.current) {
				if (onDismiss) onDismiss();
			}
		},
		[onDismiss, overLay, wrapper],
	);

	const onKeyDown = useCallback(() => {
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') onDismiss();
		};
	}, [onDismiss]);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	return (
		<div
			ref={overLay}
			onClick={onClick}
			className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto  bg-black/60 p-10">
			<div
				ref={wrapper}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  m-4  w-2/3 ">
				{children}
			</div>
		</div>
	);
}
