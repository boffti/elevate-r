import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity , TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1st Floor',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '2nd Floor',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145579d72',
        title: '4th Floor',
    },
    {
        id: '58694a0f-3da1-471f-d96-145571e29d72',
        title: '5th Floor',
    },
    {
        id: '5869a0f-3da1-471f-asd96-145571e29d72',
        title: '6th Floor',
    },
    {
        id: '58694a0-3da1-471f-abd96-145571e29d72',
        title: '7th Floor',
    },
    {
        id: '58694a0f-3da1-471f-asbd96-15571e29d72',
        title: '8th Floor',
    },
    {
        id: '584a0f-3da1-471f-asbd96-145571e29d72',
        title: '9th Floor',
    },
    {
        id: '58694a0f-3da1-471f-asbd96-145571e292',
        title: '10th Floor',
    },
];

function Item({ id, title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item,
                { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}


export default function Floor() {

    useEffect(() => {
        Speech.speak('You pressed the Up button. Please wait for the elevator.');

        setTimeout(function () {
            Speech.speak('The elevator is here. Please select the floor you want to go to.');
        }, 5000);
    }, []);

    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            Speech.speak('You pressed 6th floor. Safe travels!');

            setSelected(newSelected);
        },
        [selected],
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                        id={item.id}
                        title={item.title}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.id}
                extraData={selected}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});