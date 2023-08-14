"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod(): void {
//         console.log("secret")
//     }
// }
// const elton = new Player("Elton", "Steele");
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
    secretMethod() {
        console.log("secret");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("must be positive");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999;
    }
}
const elton = new Player("Elton", "Steele");
elton.fullName;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.brand} ${this.color}`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
    doWork() {
        console.log("*DO WORK*");
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 11000);
console.log(bill.getPay());
// Employee
// -FullTimeEmployee
// -PartTimeEmployee
const nums = [];
const usernameInput = document.querySelector("#username");
const btn = document.querySelector(".btn");
btn.append("button");
btn.addEventListener("click", function () {
    console.log("clicked!");
});
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
let kitten = {
    name: "mitten",
    breed: "cat",
};
identity(7);
identity(kitten);
function getRandomElement(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}
console.log(getRandomElement(["he", "him", "her"]));
getRandomElement(["he", "him", "her"]);
function merge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const comboOjb = merge({ name: 'colt' }, { pets: ["blue", "elton"] });
const comboOjb1 = merge({ name: 'Steven' }, { pets: ["bob", "brown"] });
function makeEmptyArray() {
    return [];
}
const undefinedArr = makeEmptyArray();
const strings = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
videos.add({
    title: "test",
    creator: "me",
    resolution: "1080"
});
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
const el = document.getElementById("idk");
if (el) {
    el.append("hello");
}
else {
    console.log("no element found");
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toLowerCase;
        y.toLowerCase;
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 160 }));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
printFullDate("12/12/2012");
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log(entity.username);
    }
    else {
        console.log(entity.name);
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return animal.numLives.toString();
    }
    return animal.name;
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "Oink!";
        case ("cow"):
            return "Moo!";
        case ("rooster"):
            return "Cockadoodledo";
        case ("sheep"):
            return "Baaa!";
        default:
            //we should never make it here...
            const shouldNeverGetHere = animal;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
