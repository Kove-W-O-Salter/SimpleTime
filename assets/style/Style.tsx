import {StyleSheet} from "react-native";

export function styleSheet(useDarkTheme: boolean) {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: useDarkTheme ? Color.ForegroundDark : Color.ForegroundLight,
            backgroundColor: useDarkTheme ? Color.BackgroundDark : Color.BackgroundLight
        },
        text: {
            fontFamily: "monospace"
        },
        time: {
            color: useDarkTheme ? Color.ForegroundDark : Color.ForegroundLight,
            fontSize: 40,
            flexWrap: "wrap",
            textAlign: "center",
            marginLeft: Margin.Left,
            marginRight: Margin.Right,
            marginBottom: Margin.Bottom
        },
        button: {
            backgroundColor: Color.Primary,
            paddingTop: Padding.Top,
            paddingBottom: Padding.Bottom,
            paddingRight: Padding.Right,
            paddingLeft: Padding.Left,
            borderRadius: 5,
            elevation: 5,
            marginTop: Margin.Top,
            fontFamily: "monospace"
        },
        buttonText: {
            color: Color.ForegroundDark
        }
    });
}

export enum Color {
    Primary = "#6200ee",
    PrimaryVariant = "#3700b3",
    Secondary = "#03dac6",
    SecondaryVariant = "#018786",

    BackgroundDark = "#212121",
    BackgroundLight = "#ffffff",

    ForegroundDark = "#ffffff",
    ForegroundLight = "#000000"
}

enum Padding {
    Left = 20,
    Right = 20,
    Bottom = 20,
    Top = 20
}

enum Margin {
    Left = 20,
    Right = 20,
    Bottom = 20,
    Top = 20
}