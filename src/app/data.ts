export type Post = {
	id: string;
	title: string;
	content: string;
	author: string;
	createdAt: string;
};

const PostsData: Post[] = [
	{
		id: '1',
		title: 'Next is future Web',
		content:
			'In the dynamic world of web development, frameworks, and libraries come and go, each promising to revolutionize the way we build web applications. Yet, few have made an impact as significant as Next.js in recent years. Originally introduced by Vercel (formerly Zeit) in 2016, Next.js emerged as a modest solution to some of React’s challenges, particularly around server-side rendering and routing. Today, it stands as one of the most influential tools in the React ecosystem, driving a paradigm shift in how we approach web development.',
		author: 'Axai Kaizoku',
		createdAt: '19th Feb',
	},
	{
		id: '2',
		title: 'The Journey of a Lifetime',
		content:
			"Once upon a time in a land far, far away, there lived a brave knight named Sir Lancelot. He embarked on a journey to rescue the kingdom's princess from the clutches of an evil sorcerer. Along the way, he encountered fierce dragons, enchanted forests, and treacherous mountains. But with courage and determination, he overcame every obstacle and emerged victorious, earning the title of the kingdom's greatest hero.",
		author: 'Lady Guinevere',
		createdAt: '21st Feb',
	},
	{
		id: '3',
		title: 'The Secret Garden',
		content:
			'Hidden deep within the heart of the forest lies a secret garden filled with wonders untold. It is a place of magic and mystery, where flowers bloom in every shade of the rainbow and birds sing melodies that stir the soul. Only those pure of heart can find their way to this enchanted realm, where dreams come to life and the impossible becomes possible.',
		author: 'Joyful Soul',
		createdAt: '23rd Feb',
	},
	{
		id: '4',
		title: 'The Art of Happiness',
		content:
			'Happiness is not found in the pursuit of wealth or fame, but in the simple pleasures of life. It is in the laughter of children, the warmth of a sunlit day, and the embrace of loved ones. True happiness comes from within, cultivated through kindness, gratitude, and compassion. It is a state of being that transcends circumstance and brings joy to every moment.',
		author: 'Joyful Soul',
		createdAt: '25th Feb',
	},
	{
		id: '5',
		title: 'Echoes of the Past',
		content:
			'In the quiet solitude of an ancient ruin, echoes of the past whisper secrets long forgotten. Each crumbling stone bears witness to the passage of time, while the wind carries the echoes of laughter and tears that once filled these hallowed halls. Amidst the ruins, a sense of reverence lingers, reminding us of the fleeting nature of life and the enduring legacy of those who came before.',
		author: 'Joyful Soul',
		createdAt: '27th Feb',
	},
];

export default PostsData;
