import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	searchInput: {
		alignSelf: 'center',
	},
	line: {
		flex: 1,
		height: 1,

		marginTop: 36,
		backgroundColor: colors.gray,
	},
	fabButton: {
		position: 'absolute',
		bottom: 36,
		end: 36,
	},
});

export const countryObjectStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	countryName: {
		flex: 1,
		marginStart: 12,

		color: colors.text_color,
	},
	countryFlag: {
		width: 32,
		height: 20,

		borderRadius: 4,
	},
});
