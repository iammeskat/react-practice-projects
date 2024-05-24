export const sampleQuestion = `Machine Learning involves training models to make predictions or decisions based on data. One common type of machine learning is {{blank_1}}, where the model is trained on labeled data. Another type is {{blank_2}}, which involves training models on data without explicit labels. In ML, {{blank_3}} is a crucial step that involves dividing the dataset into training and testing sets to evaluate the model’s performance. Additionally, {{blank_4}} learning is a technique where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward.`

export const sampleAnswers = {
	blank_1: {
		ans: 'supervised learning',
		isCaseSensitive: false
	},
	blank_2: {
		ans: 'unsupervised learning',
		isCaseSensitive: false
	},
	blank_3: {
		ans: 'data splitting',
		isCaseSensitive: false
	},
	blank_4: {
		ans: 'Reinforcement',
		isCaseSensitive: true
	},
}