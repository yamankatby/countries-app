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
		default:
			return state;
	}
}
