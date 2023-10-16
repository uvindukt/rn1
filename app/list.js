import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { remove } from "../reducer/itemReducer";

export default function List() {

    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(remove(id));
    };

    return <SafeAreaView style={styles.container}>
        {
            (items.length <= 0) && <Text>No items available</Text>
        }
        <ScrollView>
            {
                items.map(item => {
                    return <View key={item.id} style={styles.item}>
                        <View style={styles.itemDetails}>
                            <Text>Name : {item.name}</Text>
                            <Text>Planned : {item.plannedAmount}</Text>
                            <Text>Actual : {item.actualAmount}</Text>
                        </View>
                        <View style={styles.itemActions}>
                            <Button title="Remove" color={'#990000'} onPress={() => (removeItem(item.id))} />
                        </View>
                    </View>
                })
            }
        </ScrollView>
    </SafeAreaView>;

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    item: {
        marginBottom: 10,
        backgroundColor: '#CCCCCC',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    itemActions: {
        alignSelf: 'center'
    }
});