export const textToLinesKeys = (text = '', regx = /{{(.*?)}}/g) => {
	const processedText = text?.replace(
		regx,
		(match, group) => `{{${group?.trim().replace(/\s/g, '_')?.toLowerCase()}}}`
	);


	const keys = ("" + processedText)?.match(
		regx,
	)?.map(item => (item?.replace("{{", "")?.replace("}}", "")));

	const lines = ("" + processedText)?.split(regx)?.filter(item => !(keys?.includes(item)));

	const linesAndKeys = (lines?.map((item, indx) => ({ text: item, key: (keys?.[indx] || null) })) || []);

	return { processedText, linesAndKeys };
}

export const parseText = (text = "") => {
	const parts = text.split(/({{[^{}]*}})/g);
	const processedParts = [];
	let countKey = 1;
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];
		if (part.match(/{{[^}]+}}/)) {
			const key = part
				.replace(/{{|}}/g, '')
				.trim()
				.replaceAll(" ", "_");

			processedParts.push({
				text: key,
				isBlank: true,
				indx: countKey
			});
			countKey += 1;
		} else {
			processedParts.push({ text: part })
		}
	}
	return processedParts;
};