import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type MyCheckBoxProps = {
	name: string;
	onCheck: (where: string) => void;
	isChecked: (where: string) => boolean;
};

export default function MyCheckBox({
	name,
	onCheck,
	isChecked,
}: MyCheckBoxProps) {
	const [checked, setChecked] = useState(() => isChecked(name));

	const onPress = () => {
		// setChecked(!checked);
		onCheck(name);
	};
	return (
		<Pressable
			onPress={onPress}
			style={styles.checkboxRow}>
			<Text>{name}</Text>
			<View
				style={[
					styles.checkboxBase,
					isChecked(name) && styles.checkboxChecked,
				]}>
				{isChecked(name) && (
					<Ionicons
						name="checkmark"
						size={18}
						color="white"
					/>
				)}
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	checkboxRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: 'blue',
		borderWidth: 0.5,
		padding: 6,
		borderRadius: 4,
	},

	checkboxBase: {
		width: 24,
		height: 24,
		borderRadius: 24,
		borderWidth: 1,
		borderColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxChecked: {
		backgroundColor: 'red',
		borderColor: 'red',
	},
});
