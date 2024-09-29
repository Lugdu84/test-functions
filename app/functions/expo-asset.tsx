import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Image } from 'expo-image';

export default function ExpoAssetScreen() {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{ title: 'Expo Asset', headerBackTitleVisible: false }}
			/>
			<Image
				// source={require('@/assets/images/react-logo.png')}
				source="react-logo"
				style={styles.image}
				contentFit="cover"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
	},
	image: {
		width: 100,
		height: 100,
	},
});
