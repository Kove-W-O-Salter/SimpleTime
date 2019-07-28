import React from 'react';
import Frontend from "./SimpleTime/Frontend";


export default class App extends React.Component {
    public render(): JSX.Element {
        console.disableYellowBox = true;
        
        return (
            <Frontend />
        );
    }
}