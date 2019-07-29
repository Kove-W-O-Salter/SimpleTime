import React from "react";
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from "react-native";
import Backend from "./Backend";
import Styles from "../assets/style/Style";

export default class Frontend extends React.Component {
    public render(): JSX.Element {
        let sunAngle: number = this.backend.sunAngle();

        if(sunAngle > 90 && sunAngle < 270) {
            this.styles.enableDarkTheme();
        } else {
            this.styles.disableDarkTheme();
        }

        return (
            <View style={this.styles.styles().container}>
                <Text style={[this.styles.styles().text, this.styles.styles().time]}>
                    {this.backend.simpleTime()}
                </Text>
                <Image source={require("../assets/img/day.png")} style={{ transform: [{ rotateZ: `${this.backend.sunAngle()}deg` }] }} />
                <TouchableHighlight onPress={this.backend.saySimpleTime} underlayColor={this.styles.usingDarkTheme() ? "#212121" : "#ffffff"} activeOpacity={0.5}>
                    <View style={this.styles.styles().button}>
                        <Text style={this.styles.styles().text}>Say SimpleTime</Text>
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
    private styles: Styles = new Styles();
}