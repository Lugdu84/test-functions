import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function FunctionsScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Test de fonctionnalités</Text>
			<Link
				style={styles.link}
				href={'/functions/checkbox'}>
				CheckBox
			</Link>
			<Link
				style={styles.link}
				href={'/functions/expo-asset'}>
				Expo Assets
			</Link>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		gap: 20,
	},
	link: {
		color: 'blue',
	},
});
