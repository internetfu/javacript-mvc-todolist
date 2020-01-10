export default class hey {
    constructor (greeting) {
        this.greeting = greeting;
    }

    getGreetings () {
        return `${this.greeting}, dude`;
    }

}

const whatIsYourName = () =>{
    return 'what is your name';
};

export { whatIsYourName };