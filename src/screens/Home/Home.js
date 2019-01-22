import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Header, SearchInput, FabButton } from '../../components';
import CountryObject from './CountryObject';

import { fetchCountries, changeSearchQuery } from '../../actions/countries';

import { homeStyles as styles } from './styles';

class Home extends React.Component {
	onSearchButtonTouched = () => {
		console.warn('search button touched');

		//TODO: call this action by dispatch
		fetchCountries('some query');
	};

	onChangeSearchQuery = (text) => {
		console.warn('new text = ' + text);

		//TODO: call this action by dispatch
		changeSearchQuery(text);
	};

	onFabButtonTouched = () => {
		console.warn('FabButton has been touched');

		//TODO: call this action by dispatch
		fetchCountries('');
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

					<CountryObject />
				</ScrollView>
				<FabButton
					icon='refresh'
					onPress={this.onFabButtonTouched}
					style={styles.fabButton}
				/>
			</View>
		);
	}
}

export default Home;
