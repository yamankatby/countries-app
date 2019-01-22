import { navigator } from './navigator';

import Home from '../screens/Home/Home';

const routes = {
	Home: { screen: Home },
};

const options = {
	cardStyle: {
		backgroundColor: 'white',
	},
};

export const AppNavigator = navigator({ routes, options });
