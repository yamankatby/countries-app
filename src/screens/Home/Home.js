import * as React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header, SearchInput, FabButton } from '../../components';
import CountryObject from './CountryObject';

import { fetchCountries, changeSearchQuery } from '../../actions/countries';

import { homeStyles as styles } from './styles';

class Home extends React.Component {
	onSearchButtonTouched = () => {
		this.props.dispatch(fetchCountries('some query'));
	};

	onChangeSearchQuery = (text) => {
		this.props.dispatch(changeSearchQuery(text));
	};

	onFabButtonTouched = () => {
		this.props.dispatch(fetchCountries(''));
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

Home.propTypes = {
	dispatch: PropTypes.func,
};

const stateToProps = (state) => {
	return {};
};

export default connect(stateToProps)(Home);
