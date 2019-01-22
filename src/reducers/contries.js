import { CountriesActionTypes as ActionTypes } from '../types/ActionTypes';

const initialState = {
	countries: [],
	searchQuery: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ActionTypes.fetch_countries_result:
			if (action.hasError)
				return state;
			return {
				...state,
				countries: action.countries,
			};

		case ActionTypes.change_search_query:
			return {
				...state,
				searchQuery: action.searchQuery,
			};

		default:
			return state;
	}
}
