import { navigator } from './navigator';

import Home from '../screens/Home/Home';
import CountryDetails from '../screens/CountryDetails/CountryDetails';

const routes = {
	Home: { screen: Home },
	CountryDetails: { screen: CountryDetails },
};

const options = {
	cardStyle: {
		backgroundColor: 'white',
	},
};

export const AppNavigator = navigator({ routes, options });
