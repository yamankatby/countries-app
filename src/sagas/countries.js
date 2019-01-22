import { call, put, takeLatest } from 'redux-saga/effects';

import { fetch_countries_api } from '../api/webApi';
import { fetchCountriesResult } from '../actions/countries';

import { CountriesActionTypes as ActionTypes } from '../types/ActionTypes';

function* fetchCountriesSaga(action) {
	try {
		const { searchQuery } = action;

		const response = yield call(fetch_countries_api, searchQuery);
		yield put(fetchCountriesResult(false, response.data));
	} catch (e) {
		yield put(fetchCountriesResult(true));
	}
}

export default [
	takeLatest(ActionTypes.fetch_countries, fetchCountriesSaga),
];
