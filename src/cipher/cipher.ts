const __WORDS_MAP: any = {
	a: 'enter',
	e: 'imes',
	i: 'ai',
	o: 'abor',
	u: 'ufat'
} as const;

function cipher(text: string) {
	return text.replace(/[a-z]/gi, (match) => {
		let isUppercase = match === match.toUpperCase();
		let encodedMatch: string = __WORDS_MAP[match.toLowerCase()] ?? match;

		return isUppercase ? encodedMatch.toUpperCase() : encodedMatch;
	});
}

function decipher(text: string) {
	var result = text;
	for (let key in __WORDS_MAP) {
		let value = __WORDS_MAP[key];
		let pattern = RegExp(value, 'gi');

		result = result.replace(pattern, (match) =>
			match === match.toUpperCase() ? key.toUpperCase() : key
		);
	}

	return result;
}

export { cipher, decipher };
