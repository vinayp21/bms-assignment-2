import axios from 'axios';
import CONSTANT from '../constants/testConstants';

const getAllGenres = list => {
	const keys = Object.keys(list);
	const uniqueGenre = [];
	keys.forEach(eventKey => {
		const genreArr = list[eventKey].EventGenre.split('|');
		genreArr.forEach(genre => {
			if (uniqueGenre.indexOf(genre) === -1) {
				uniqueGenre.push(genre);
			}
		});
	});
	return uniqueGenre;
};

export const getPageData = () => dispatch => {
	axios.get('http://localhost:3001/getAllEvents').then(response => {
		const data = JSON.parse(response.data);
		const uniqueGenre = getAllGenres(data[1]);
		dispatch({
			type: CONSTANT.SET_APP_DATA,
			payload: {
				data,
				uniqueGenre
			}
		});
	});
};

export const setSelectedEvent = (data, id) => dispatch => {
	dispatch({
		type: CONSTANT.SET_SELECTED_EVENT,
		payload: {
			...data,
			id
		}
	});
};

const getUpdatedList = (state, lng, genre) => {
	console.log(state, lng, genre);
	const selectedLang = lng.map(language => language.label);
	const selectedGenre = genre.map(gen => gen.label);
	const list = state.bms.data[1];
	const keys = Object.keys(list);
	let newList = {};
	if (selectedGenre[0] === 'Genre' && selectedLang[0] === 'Language') {
		newList = list;
	} else {
		keys.forEach(eventKey => {
			if (
				selectedLang.indexOf(list[eventKey].EventLanguage) >= 0 &&
				selectedGenre[0] === 'Genre'
			) {
				newList[eventKey] = list[eventKey];
			} else if (
				selectedGenre.indexOf(list[eventKey].EventGenre) >= 0 &&
				selectedLang[0] === 'Language'
			) {
				newList[eventKey] = list[eventKey];
			} else if (
				selectedLang.indexOf(list[eventKey].EventLanguage) >= 0 &&
				selectedGenre.indexOf(list[eventKey].EventGenre) >= 0
			) {
				newList[eventKey] = list[eventKey];
			}
		});
	}
	return [state.bms.data[0], newList];
};

export const updateList = (lng, genre) => (dispatch, getState) => {
	const state = getState();
	const filteredData = getUpdatedList(state, lng, genre);
	dispatch({
		type: CONSTANT.UPDATE_LIST,
		payload: filteredData
	});
};
