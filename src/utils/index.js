export const getMonth = month => {
	switch (month) {
		case 1:
			return 'January';
		case 2:
			return 'Febraury';
		case 3:
			return 'March';
		case 4:
			return 'April';
		case 5:
			return 'May';
		case 6:
			return 'June';
		case 7:
			return 'July';
		case 8:
			return 'August';
		case 9:
			return 'September';
		case 10:
			return 'October';
		case 11:
			return 'November';
		case 12:
			return 'December';
		default:
			return '';
	}
};

export const screen = () => {
	let size = '';
	if (window.innerWidth < 575) {
		size = 'small';
	} else if (window.innerWidth > 575 && window.innerWidth < 768) {
		size = 'medium';
	} else {
		size = 'large';
	}
	return size;
};
