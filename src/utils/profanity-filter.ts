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

const censor = new TextCensor();

export const censorContent = (content: any) => {
	const matches = matcher.getAllMatches(content);
	return censor.applyTo(content, matches);
};

export const profanityFilter = (content: any) => {
	return matcher.hasMatch(content);
};
