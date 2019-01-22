import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './config/store';
import { AppNavigator } from './config/routes';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<AppNavigator />
				</View>
			</Provider>
		);
	}
}

export default App;
