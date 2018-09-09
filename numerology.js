const replaceall = require('replaceall');

const patrons = ['Sun(Солнце)', 'Moon(Луна)', 'Mars(Марс)', 'Mercury(Меркурий)', 'Jupiter(Юпитер)', 'Venus(Венера)', 'Saturn(Сатурн)', 'Uranus(Уран)', 'Neptune(Нептун)'];
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

exports.calculatePatron = function (name) {
	//Remove all spaces, dashes, etc.
	name = replaceall(' ', '', name);
	name = replaceall('-', '', name);
	name = replaceall('\'', '', name);
	
	//Transform to Upper case
	name = name.toUpperCase();
	
	var number = combineLetterNumbers(name);
	
	return patrons[number - 1];
}

/*
 * Get alphabet number for each letter. If it's greater than 9 - substract 9 until value became less than 10.
 * Summarize all this values together and if result value is greater than 9 - continue summing number digits until the result will be less than 10.
*/
function combineLetterNumbers(str) {
	var result = str.split('')
		.map(letter => alphabet.indexOf(letter) + 1)
		.map(number => {
			while (number > 9) {
				number -= 9;
			}
			return number;
		})
		.reduce((a, b) => a + b, 0);
	
	while (result > 9) {
		result = ('' + result).split('')
			.map(item => Number(item))
			.reduce((a, b) => a + b, 0);	
	}

	return result;
}