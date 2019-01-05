class Person {
    constructor(name='anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I'm from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler("Ashwin", 26, 'California');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined,'nowhere');
console.log(other.getGreeting());