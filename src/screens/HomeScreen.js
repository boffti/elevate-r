import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import LocationComponent from './Location';
import ButtonList from './Direction';
import Constants from "expo-constants";
import * as Speech from 'expo-speech';

const HomeScreen = (props) => {

  const pressUp = () => {
    Speech.speak('You pressed the Up button. Please wait for the elevator.');

    setTimeout(function () {
        Speech.speak('The elevator is here.');
        props.navigation.navigate('Floor');
    }, 5000);
}

  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={() => props.navigation.navigate('Elevator')}>
                <ImageBackground
                    source={{ uri: "https://i.ibb.co/55qxrr2/up.png" }}
                    style={{ height: 250, width: 500, marginTop: 100 }}
                />
            </TouchableOpacity>

            <ImageBackground
                source={{ uri: "https://i.ibb.co/3d013KX/down.png" }}
                style={{ height: 250, width: 500, marginTop: 15 }}
            />
      <LocationComponent style={styles.location, styles.text}></LocationComponent>
    </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  location: {
    marginTop: "auto",
    marginBottom: 16,
    marginRight: "auto",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  }
});

export default HomeScreen;
