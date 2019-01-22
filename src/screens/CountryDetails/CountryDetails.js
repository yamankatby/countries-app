import * as React from 'react';
import { View, Text } from 'react-native';

class CountryDetails extends React.Component {
	static navigationOptions = {
		title: 'Country Details',
	};

	render() {
		const { name, nativeName } = this.props.navigation.state.params.country;

		return (
			<View>
				<Text>{`${name} ( ${nativeName} )`}</Text>
			</View>
		);
	}
}

export default CountryDetails;
