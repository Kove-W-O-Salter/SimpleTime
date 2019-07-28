import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import Backend from "./Backend";

export default class Frontend extends React.Component {
    public render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.time]}>
                    {this.backend.simpleTime()}
                </Text>
                <Image source={require("../assets/img/day.png")} style={{ transform: [{ rotateZ: `${this.backend.sunAngle()}deg` }] }} />
                <TouchableHighlight onPress={this.backend.saySimpleTime} underlayColor="white" activeOpacity={0.5}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Say SimpleTime</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    
    public async componentDidMount(): Promise<void> {
        this.interval = setInterval(() => {
            this.backend.update();
            this.forceUpdate();
        }, 1000);
    }
    
    public componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    private interval: number;
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
        color: "black",
        fontFamily: "monospace"
    },
    time: {
        fontSize: 40,
        flexWrap: "wrap",
        textAlign: "center",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    button: {
        backgroundColor: "lightgrey",
        padding: 20,
        borderRadius: 5,
        elevation: 5,
        marginTop: 20
    }
});