import * as React from 'react';
import { View, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../';

import { fabButtonStyles as styles } from './styles';

class FabButton extends React.Component {
	componentDidMount() {
		console.log(this.props.style);
	}

	render() {
		const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
		const { icon, onPress, style } = this.props;

		return (
			<View style={[styles.container, style]}>
				<TouchableComponent onPress={onPress} style={styles.touchable}>
					<View style={styles.touchableContent}>
						<Icon name={icon} tintColor='white' />
					</View>
				</TouchableComponent>
			</View>
		);
	}
}

FabButton.propTypes = {
	icon: PropTypes.string,
	onPress: PropTypes.func,
	style: PropTypes.any,
};

export default FabButton;
