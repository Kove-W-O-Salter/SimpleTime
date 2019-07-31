import React from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import SimpleTime from "./src/SimpleTime";
import { styleSheet, Color } from "./assets/style/Style";

export default class App extends React.Component {
    public render(): JSX.Element {
        let sunAngle: number = this.backend.getSunAngle();
        let useDarkTheme: boolean = sunAngle > 90 && sunAngle < 270;
        let styles = styleSheet(useDarkTheme);

        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.time]}>
                    {this.backend.getSimpleTime()}
                </Text>
                <Image
                    source={require("./assets/img/day.png")}
                    style={{ transform: [{ rotateZ: `${sunAngle}deg` }] }}
                />
                <TouchableHighlight
                    onPress={this.backend.saySimpleTime}
                    underlayColor={useDarkTheme ? Color.BackgroundDark : Color.BackgroundLight}
                    activeOpacity={0.75}
                >
                    <View style={styles.button}>
                        <Text style={[styles.text, styles.buttonText]}>
                            Say SimpleTime
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    
    public componentDidMount(): void {
        this.interval = setInterval((): void => {
            this.backend.update();
            this.forceUpdate();
        }, 30000);
    }
    
    public componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    private interval: number;
    private backend: SimpleTime = new SimpleTime();
}