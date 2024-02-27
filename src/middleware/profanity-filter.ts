import {
	RegExpMatcher,
	TextCensor,
	englishDataset,
	englishRecommendedTransformers,
} from 'obscenity';

const matcher = new RegExpMatcher({
	...englishDataset.build(),
	...englishRecommendedTransformers,
});

const profanityFilter = (content: any) => {
	if (matcher.hasMatch(content)) {
		return true;
	}
};

export default profanityFilter;
