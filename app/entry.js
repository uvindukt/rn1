import { Link } from "expo-router";
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux';
import { add } from "../reducer/itemReducer";

export default function Entry() {

    const dispatch = useDispatch();

    const [name, onChangeName] = useState('');
    const [plannedAmount, onChangePlannedAmount] = useState('');
    const [actualAmount, onChangeActualAmount] = useState('');

    const save = () => {
        dispatch(add({ id: Date.now(), name: name, plannedAmount: plannedAmount, actualAmount: actualAmount }));
    };

    return <SafeAreaView style={styles.container}>

        <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            placeholder="Name"
            value={name}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePlannedAmount}
            value={plannedAmount}
            placeholder="Planned Amount"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeActualAmount}
            value={actualAmount}
            placeholder="Actual Amount"
            keyboardType="numeric"
        />

        <View style={styles.actions}>
            <View style={styles.save}>
                <Button title="Save" onPress={save} color={'#008800'} />
            </View>

            <Link href={{
                pathname: '/list'
            }} asChild>
                <Button title="Show Items" />
            </Link>
        </View>

    </SafeAreaView>;

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    save: {
        marginBottom: 5
    },
    actions: {
        margin: 12
    }
});