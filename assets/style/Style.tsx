import {StyleSheet} from "react-native";

export default class Styles {
    public constructor() {
        this.disableDarkTheme();
    }

    public usingDarkTheme = (): boolean => {
        return this.useDarkTheme;
    }

    public enableDarkTheme = (): boolean => {
        return (this.useDarkTheme = true);
    }

    public disableDarkTheme = (): boolean => {
        return (this.useDarkTheme = false);
    }

    public toggleDarkTheme = (): boolean => {
        return (this.useDarkTheme = !this.useDarkTheme);
    }

    public styles = (): any => {
        return this.createStyles(this.usingDarkTheme())
    }

    private createStyles(_useDarkTheme: boolean): any {
        return StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: _useDarkTheme ? this.colors.DarkForeground : this.colors.LightForeground,
                backgroundColor: _useDarkTheme ? this.colors.DarkBackground : this.colors.LightBackground
            },
            text: {
                color: _useDarkTheme ? this.colors.DarkForeground : this.colors.LightForeground,
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
                backgroundColor: _useDarkTheme ? this.colors.DarkButton : this.colors.LightButton,
                padding: 20,
                borderRadius: 5,
                elevation: 5,
                marginTop: 20,
                fontFamily: "monospace"
            }
        });
    }

    private useDarkTheme: boolean = false;
    private colors: any = {
        LightBackground: "#ffffff",
        DarkBackground: "#212121",
        LightForeground: "#000000",
        DarkForeground: "#ffffff",

        DarkButton: "#303030",
        LightButton: "#d3d3d3"
    };
}