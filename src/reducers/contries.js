import { CountriesActionTypes as ActionTypes } from '../types/ActionTypes';

const initialState = {
	countries: [],
	searchQuery: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
