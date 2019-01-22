import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Header, SearchInput } from '../../components';

import { homeStyles as styles } from './styles';

class Home extends React.Component {
	onSearchButtonTouched = () => {
		console.warn('search button touched');
	};

	onChangeSearchQuery = (text) => {
		console.warn('new text = ' + text);
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container}>
					<Header />
					<SearchInput
						placeholder='Ülke adını girin'
						onPress={this.onSearchButtonTouched}
						onChangeText={this.onChangeSearchQuery}
						style={styles.searchInput}
					/>
					<View style={styles.line} />
				</ScrollView>
			</View>
		);
	}
}

export default Home;
