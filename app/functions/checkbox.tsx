import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import MyCheckBox from '@/components/MyCheckBox';

export default function CheckBoxScreen() {
	const [checked, setChecked] = useState(false);
	const [wheres, setWheres] = useState<String[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);

	const onCheck = (where: string) => {
		if (wheres.includes(where)) {
			setWheres(wheres.filter((w) => w !== where));
		} else {
			setWheres([...wheres, where]);
		}
	};

	const isChecked = (where: string) => wheres.includes(where);
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen
				options={{ title: 'CheckBox', headerBackTitleVisible: false }}
			/>
			{/* <View>
				<Text>CheckBox with Expo CheckBox</Text>
				<Text>Checked: {checked ? 'true' : 'false'}</Text>
				<Checkbox
					value={checked}
					onValueChange={setChecked}
				/>
			</View> */}

			<View style={styles.accords}>
				<View style={styles.rowHeader}>
					<Text>Où avez-vous mal ?</Text>
					{wheres.length > 0 && (
						<View style={styles.numbersOfSelect}>
							<Text>{wheres.length}</Text>
						</View>
					)}
					<Pressable onPress={() => setIsExpanded(!isExpanded)}>
						<AntDesign
							name={isExpanded ? 'up' : 'down'}
							size={24}
							color="black"
						/>
					</Pressable>
				</View>

				{isExpanded && (
					<View style={styles.checkedList}>
						<MyCheckBox
							name="Abdomen"
							onCheck={onCheck}
							isChecked={isChecked}
						/>
						<MyCheckBox
							name="Cou"
							onCheck={onCheck}
							isChecked={isChecked}
						/>
						<MyCheckBox
							name="Poitrine"
							onCheck={onCheck}
							isChecked={isChecked}
						/>
						<MyCheckBox
							name="Dos"
							onCheck={onCheck}
							isChecked={isChecked}
						/>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		gap: 10,
	},
	accords: {
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
		borderRadius: 10,
		gap: 10,
	},
	rowHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 20,
	},
	checkedList: {
		gap: 10,
	},
	numbersOfSelect: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 24,
		height: 24,
		borderRadius: 24,
		borderWidth: 1,
		borderColor: 'lightgreen',
		backgroundColor: 'lightgreen',
	},
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
