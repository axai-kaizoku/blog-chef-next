const formatDate = (createdAt: Date) => {
	const date = new Date(createdAt);
	return date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
};

export default formatDate;
