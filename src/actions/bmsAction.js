import {useContext} from 'react';
import {context} from '../context';
import axios from 'axios';
import CONSTANT from '../constants/testConstants';


export const setSelectedEvent = (data, id)  => {
	return{
		type: CONSTANT.SET_SELECTED_EVENT,
		payload: {
			...data,
			id
		}
	};
};

const getUpdatedList = (state, lng, genre) => {
	const selectedLang = lng.map(language => language.label);
	const selectedGenre = genre.map(gen => gen.label);
	const list = state[1];
	const keys = Object.keys(list);
	let newList = {};
	if (
		(selectedGenre[0] === 'Genre' && selectedLang[0] === 'Language') ||
		(selectedLang.length === 0 && selectedGenre[0] === 'Genre') ||
		(selectedGenre === 0 && selectedLang[0] === 'Language')
	) {
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
	console.log(newList)
	return [state[0], newList];
};

export const updateList = (state, lng, genre) =>  {
	const filteredData = getUpdatedList(state, lng, genre);
	return {
		type: CONSTANT.UPDATE_LIST,
		payload: filteredData
	}
};
export const closeSection = ()  => {
	return{
		type: CONSTANT.CLOSE_VIDEO_SECTION
	};
};

export const getPageData = (data,uniqueGenre ) => {
	return {
			type: CONSTANT.SET_APP_DATA,
			payload: {
				data,
				uniqueGenre
			}
	}
}
