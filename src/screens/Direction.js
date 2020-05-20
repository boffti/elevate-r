import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import * as Speech from 'expo-speech';



const ButtonList = (props) => {


    // const pressUp = () => {
    //     Speech.speak('You pressed the Up button. Please wait for the elevator.');

    //     setTimeout(function () {
    //         Speech.speak('The elevator is here.');
    //     }, 5000);
    // }

    return (
        <View>
            <TouchableOpacity onPress={pressUp}>
                <ImageBackground
                    source={{ uri: "https://i.ibb.co/55qxrr2/up.png" }}
                    style={{ height: 250, width: 500, marginTop: 100 }}
                />
            </TouchableOpacity>

            <ImageBackground
                source={{ uri: "https://i.ibb.co/3d013KX/down.png" }}
                style={{ height: 250, width: 500, marginTop: 15 }}
            />
        </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    },
    btn_style: {
        height: 250,
        marginBottom: 15
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ButtonList;
