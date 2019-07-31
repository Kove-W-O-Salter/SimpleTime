import { speak } from "expo-speech";

export default class SimpleTime {
    public constructor() {
        this.update();
    }

    public saySimpleTime = (): void => {
        speak(this.getSimpleTime());
    }

    public getSimpleTime = (): string => {
        let hours: string = this.showHours();
        let minutes: string = this.showMinutes();
        let result: string = "";

        if(minutes == "") {
            result = `${hours} o’clock`;
        } else {
            result = `${minutes} ${hours}`;
        }

        return result.toUpperCase();
    }

    public getSunAngle = (): number => {
        let hours: number = this.approximateHours(false);
        let partition: number = 360 / 24;
        let result: number = 0;

        if(hours >= 12) {
            result = (hours - 12) * partition;
        } else {
            result = 180 + hours * partition;
        }

        return result;
    }

    public update = (): void => {
        this.date = new Date();
    }
    
    private showHours(): string {
        let result: string = "";

        switch(this.approximateHours(true)) {
            case 1:
                result = "one";
                break;
            case 2:
                result = "two";
                break;
            case 3:
                result = "three";
                break;
            case 4:
                result = "four";
                break;
            case 5:
                result = "five";
                break;
            case 6:
                result = "six";
                break;
            case 7:
                result = "seven";
                break;
            case 8:
                result = "eight";
                break;
            case 9:
                result = "nine";
                break;
            case 10:
                result = "ten";
                break;
            case 11:
                result = "eleven";
                break;
            case 12:
                result = "twelve";
                break;
        }

        return result;
    }

    private approximateHours(wrap: boolean): number {
        let hours: number = this.date.getHours();
        let minutes: number = this.roundMinutes();

        if(minutes >= 45) {
            hours += 1;
        }

        if(wrap) {
            if(hours > 12) {
                hours -= 12;
            }
        } else {
            if(hours > 23) {
                hours -= 23;
            }
        }

        return hours;
    }

    private showMinutes(): string {
        let result: string = "";

        switch(this.roundMinutes()) {
            case 0:
                break;
            case 15:
                result = "a quarter past";
                break;
            case 30:
                result = "half past";
                break;
            case 45:
                result = "a quarter to";
                break;
        }

        return result;
    }

    private roundMinutes(): number {
        let minutes: number = this.approximateMinutes();
        let over: number = minutes % 15;
        
        minutes -= over;

        if(over >= 15 / 2) {
            minutes += 15;
        }

        return minutes;
    }

    private approximateMinutes(): number {
        let minutes: number = this.date.getMinutes();

        if(this.date.getSeconds() >= 30) {
            minutes += 1;
        }

        return minutes;
    }

    private date: Date;
}