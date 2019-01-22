import { call, put, takeLatest } from 'redux-saga/effects';
import { CountriesActionTypes as ActionTypes } from '../types/ActionTypes';

function* fetchCountriesSaga(action) {
	try {
		//TODO: call the api here
	} catch (e) {
		//TODO: catch the errors here
	}
}

export default [
	takeLatest(ActionTypes.fetch_countries, fetchCountriesSaga),
];
