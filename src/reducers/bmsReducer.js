import CONSTANT from '../constants/testConstants';

const initialState = {
	data: {}
};

export default function bmsReducer(previousState = initialState, action) {
	switch (action.type) {
		case CONSTANT.SET_APP_DATA:
			return {
				...previousState,
				data: action.payload.data,
				genre: action.payload.uniqueGenre
			};
		case CONSTANT.SET_SELECTED_EVENT:
			return {
				...previousState,
				selectedEvent: action.payload
			};
		case CONSTANT.UPDATE_LIST:
			return {
				...previousState,
				filteredList: action.payload
			};

		default:
			return {
				...previousState
			};
	}
}
