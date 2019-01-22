import * as React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../../components';

import { colors } from '../../config/colors';
import { countryObjectStyles as styles } from './styles';

class CountryObject extends React.Component {
	render() {
		const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		const { onPress } = this.props;
		const { name, nativeName, alpha2Code } = this.props.country;

		return (
			<TouchableComponent onPress={onPress} style={styles.container}>
				<View style={styles.contentContainer}>
					<Image
						style={styles.countryFlag}
						resizeMode='cover'
						source={{ uri: `https://www.countryflags.io/${alpha2Code}/flat/64.png` }}
					/>
					<Text style={styles.countryName}>{`${name} ( ${nativeName} )`}</Text>

					<Icon name='arrow' tintColor={colors.text_color} />
				</View>
			</TouchableComponent>
		);
	}
}

CountryObject.propTypes = {
	country: PropTypes.object,
	onPress: PropTypes.func,
};

export default CountryObject;
