'use client';

import { useState } from 'react';

interface BtnProps {
	onDelete?:  Function;
	btnName: string;
	btnSize: number;
}

export default function DeleteBtn({
	onDelete,
	btnName,
	btnSize = 12,
}: BtnProps) {
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleDeleteClick = () => {
		console.log("handleDeleteClick")
	
		setShowConfirmation(true);
	};

	const handleYesClick = () => {
		onDelete();
		setShowConfirmation(false);
		console.log("handleYesClick")
	};

	const handleNoClick = () => {
		console.log("handleNoClick")

		setShowConfirmation(false);
	};

	const BtnStyles = {
		fontSize: `${btnSize}px`,
	};

	return (
		<div style={BtnStyles}>
			{!showConfirmation ? (
				<button onClick={handleDeleteClick}>{btnName}</button>
			) : (
				<>
					<div className="w-11/12 flex flex-row justify-between">
						<button onClick={handleNoClick}>No</button>
						<button
							onClick={handleYesClick}
							className="mx-2">
							Yes
						</button>
					</div>
				</>
			)}
		</div>
	);
}
