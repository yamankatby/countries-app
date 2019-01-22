import * as React from 'react';
import PropTypes from 'prop-types';

import Icons from '../../assets/icons';
import { colors } from '../../config/colors';

class Icon extends React.Component {
	render() {
		const { name, tintColor } = this.props;
		const TargetIcon = Icons[name];

		return (
			<TargetIcon tintColor={tintColor} {...this.props} />
		);
	}
}

Icon.propTypes = {
	name: PropTypes.string,
	tintColor: PropTypes.string,
};

Icon.defaultProps = {
	tintColor: colors.accent,
};

export default Icon;
