export default class Backend {
    constructor() {
        this.update();
    }

    public simpleTime(): string {
        let hours: string = this.showHours();
        let minutes: string = this.showMinutes();
        let result: string = "";

        if(minutes == "") {
            result = `${hours} o’clock`;
        } else {
            result = `${minutes} ${hours}`;
        }

        return result;
    }

    public update(): void {
        this.date = new Date();
    }

    private showHours(): string {
        let hours: number = this.approximateHours();
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

    private approximateHours(): number {
        let hours: number = this.date.getHours();
        let minutes: number = this.roundMinutes();

        if((minutes >= 60) || (minutes >= 45)) {
            hours += 1;
        }

        if(hours > 12) {
            hours -= 12;
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