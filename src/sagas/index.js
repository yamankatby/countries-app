import { all } from 'redux-saga/effects';

import countriesSagas from './countries';

export default function* rootSaga() {
	yield all([
		...countriesSagas,
	]);
}
