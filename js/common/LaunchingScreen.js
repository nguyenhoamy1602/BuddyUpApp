import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";

const WIN_WIDTH = Dimensions.get("window").width,
    WIN_HEIGHT = Dimensions.get("window").height;

export class LaunchScreen extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "bianca"
    },
    image: {
        position: "absolute",
        left: 0,
        top: 0,
        width: WIN_WIDTH,
        height: WIN_HEIGHT,
        resizeMode: "cover"
    }
});

/* playground cards ========================================================= */

const launchScreen = LaunchScreen;
launchScreen.__cards__ = define => {
    define("Default", _ => <LaunchScreen />);
};
