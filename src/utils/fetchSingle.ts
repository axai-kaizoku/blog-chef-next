import axios from 'axios';

export default async function fetchSinglePost(id: string) {
	try {
		const response = await axios.get(`http://localhost:3000/api/post/${id}`);
		// if (!response.ok) {
		// 	throw new Error('Failed to fetch data');
		// }
		const data = await response.data;
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
