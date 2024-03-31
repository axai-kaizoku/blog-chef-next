import axios from 'axios';

export default async function fetchPosts() {
	try {
		const response = await axios.get('http://localhost:3000/api/post');
		const data = await response.data;
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
