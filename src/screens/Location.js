import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Speech from 'expo-speech';

export default function LocationComponent() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [place, setPlace] = useState(null);

    useEffect(() => {
        if (Platform.OS === "android" && !Constants.isDevice) {
            setErrorMsg(
                "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
            );
        } else {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== "granted") {
                    setErrorMsg("Permission to access location was denied");
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);

            })();
        }
    });

    useEffect(() => {
        Speech.speak('You are are Sobha Forest View Block 1. There are 3 elevators here. This building has 20 floors. Where would you like to go?');

    }, []);

    let text = "Waiting..";
    let lat,
        long = null;
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location.coords);
        lat = location.coords.latitude;
        long = location.coords.longitude;
    }

    return (
            <View style={styles.location}>
                <Text style={styles.paragraph}>Latitude: {lat}</Text>
                <Text style={styles.paragraph}>Longitude: {long}</Text>
                <Text style={styles.place}>Sobha Forest View : Block 1</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    place: {
        backgroundColor: 'green'
    },
    paragraph: {
        margin: 5,
        fontSize: 11,
        textAlign: "center",
        backgroundColor: "yellow",
    },
    location: {
        marginTop: "auto",
        marginBottom: 16,
        marginRight: "auto",
        marginLeft: 10,
    },
});
