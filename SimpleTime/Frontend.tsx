import React from "react";
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from "react-native";
import Backend from "./Backend";
import {styleSheet, Color} from "../assets/style/Style";

export default class Frontend extends React.Component {
    public render(): JSX.Element {
        let sunAngle: number = this.backend.sunAngle();
        let usingDarkTheme: boolean = sunAngle > 90 && sunAngle < 270;
        let styles: any = styleSheet(usingDarkTheme);

        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.time]}>
                    {this.backend.simpleTime()}
                </Text>
                <Image source={require("../assets/img/day.png")} style={{ transform: [{ rotateZ: `${this.backend.sunAngle()}deg` }] }} />
                <TouchableHighlight onPress={this.backend.saySimpleTime} underlayColor={usingDarkTheme ? Color.BackgroundDark : Color.BackgroundLight} activeOpacity={0.5}>
                    <View style={styles.button}>
                        <Text style={[styles.text, styles.buttonText]}>Say SimpleTime</Text>
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