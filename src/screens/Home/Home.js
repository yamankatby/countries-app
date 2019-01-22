import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Header, SearchInput } from '../../components';

class Home extends React.Component {
	onSearchButtonTouched = () => {
		console.warn('search button touched');
	};

	onChangeSearchQuery = (text) => {
		console.warn('new text = ' + text);
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1 }}>
					<Header />
					<SearchInput
						placeholder='Ülke adını girin'
						onPress={this.onSearchButtonTouched}
						onChangeText={this.onChangeSearchQuery}
						style={{ alignSelf: 'center' }}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default Home;
