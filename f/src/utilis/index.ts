type NumberName =
	| "one"
	| "two"
	| "three"
	| "four"
	| "five"
	| "six"
	| "seven"
	| "eight"
	| "nine"
	| "ten"
	| "eleven"
	| "twelve"
	| "thirteen"
	| "fourteen"
	| "fifteen"
	| "sixteen"
	| "seventeen"
	| "eighteen"
	| "nineteen"
	| "twenty"
	| "twentyOne"
	| "twentyTwo"
	| "twentyThree";

export const mapNumbertoEnglish = (num: number) =>
	(
		[
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
			"seven",
			"eight",
			"nine",
			"ten",
			"eleven",
			"twelve",
			"thirteen",
			"fourteen",
			"fifteen",
			"sixteen",
			"seventeen",
			"eighteen",
			"nineteen",
			"twenty",
			"twentyOne",
			"twentyTwo",
			"twentyThree",
		] as NumberName[]
	)[num - 1];

export const getLocal = (key: string) => {
	const res = localStorage.getItem(key);
	return res;
};

export const setLoacl = (key: string, val: any) => {
	localStorage.setItem(key, val);
};
