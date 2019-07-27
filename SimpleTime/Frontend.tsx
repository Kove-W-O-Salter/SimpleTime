import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Backend from "./Backend";
import * as Speech from "expo-speech";

export default class SimpleTime extends React.Component {
    public render(): any {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.backend.simpleTime().toUpperCase()}</Text>
                <View style={styles.spacer}></View>
                <TouchableHighlight onPress={() => Speech.speak(this.backend.simpleTime())} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Say SimpleTime</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    
    public componentDidMount(): void {
        this.interval = setInterval(() => {
            this.backend.update();
            this.forceUpdate();
        }, 1000);
    }
    
    public componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    private interval: any;
    private backend: Backend = new Backend();
}

let styles: any = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        backgroundColor: "white",
        fontSize: 40,
        flexWrap: "wrap",
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        fontFamily: "monospace",
        color: "hotpink"
    },
    spacer: {
        marginTop: 50,
        marginBottom: 50
    },
    button: {
        backgroundColor: "lightgrey",
        padding: 20,
        borderRadius: 5
    }
});