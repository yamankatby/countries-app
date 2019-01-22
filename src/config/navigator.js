import { createStackNavigator } from 'react-navigation';

export function navigator({ routes, options }) {
	return createStackNavigator(routes, options);
}
