import * as React from 'react';
import { View, Text } from 'react-native';

import Home from './screens/Home/Home';

class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Home />
			</View>
		);
	}
}

export default App;
