import * as Speech from "expo-speech";

export default class Backend {
    public constructor() {
        this.update();
    }

    public saySimpleTime = (): void => {
        Speech.speak(this.simpleTime());
    }

    public simpleTime = (): string => {
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

    public sunAngle = (): number => {
        switch(this.sunLevel()) {
            case "pre-morning":
                return 180;
            case "early-morning":
                return 225;
            case "morning":
                return 270;
            case "pre-noon":
                return 315;
            case "noon":
                return 0;
            case "post-noon":
                return 45;
            case "evening":
                return 90;
            case "post-evening":
                return 135;
        }
    }

    public sunLevel = (): string => {
        let hours = this.approximateHours(false);

        /**
         * 0  - 1 : pre-morning      (1) 180
         * 2  - 5 : early-morning    (3) 225
         * 6  - 10: morning          (4) 270
         * 10 - 11: pre-noon         (1) 315
         * 12     : noon             (0) 0
         * 13 - 14: post-noon        (1) 45
         * 15 - 19: evening          (4) 90
         * 20 - 23: post-evening     (3) 135
         */

        if(hours >= 0 && hours <= 1) {
            return "pre-morning";
        } else if(hours >= 2 && hours <= 5) {
            return "early-morning";
        } else if(hours >= 6 && hours <= 10) {
            return "morning";
        } else if(hours >= 10 && hours <= 11) {
            return "pre-noon";
        } else if(hours == 12) {
            return "noon";
        } else if(hours >= 13 && hours <= 14) {
            return "post-noon";
        } else if(hours >= 15 && hours <= 19) {
            return "evening";
        } else {
            return "night";
        }
    }

    public update = (): void => {
        this.date = new Date();
    }

    private showHours(): string {
        let hours: number = this.approximateHours(true);
        let result: string = "";

        switch(hours) {
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
        let minutes: number = this.roundMinutes();
        let result: string = "";

        switch(minutes) {
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
        let seconds: number = this.date.getSeconds();

        if(seconds >= 30) {
            minutes += 1;
        }

        return minutes;
    }

    private date: Date;
}