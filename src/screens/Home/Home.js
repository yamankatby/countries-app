import * as React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header, SearchInput, FabButton } from '../../components';
import CountryObject from './CountryObject';

import { fetchCountries, changeSearchQuery } from '../../actions/countries';

import { homeStyles as styles } from './styles';

class Home extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCountries());
	}

	onSearchButtonTouched = () => {
		const { searchQuery } = this.props;
		this.props.dispatch(fetchCountries(searchQuery));
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

	countries: PropTypes.array,
	searchQuery: PropTypes.string,
};

const stateToProps = (state) => {
	const { countries, searchQuery } = state.countries;
	return {
		countries,
		searchQuery,
	};
};

export default connect(stateToProps)(Home);
