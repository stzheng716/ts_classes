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
    protected _score: number = 0;


    constructor(public first: string, public last: string) {

    }

    private secretMethod(): void {
        console.log("secret");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("must be positive");
        }

        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 9999999;
    }

}

const elton = new Player("Elton", "Steele");

elton.fullName;

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {

    constructor(public color: string) { }
}

interface DoWork {
    doWork(): void;
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { }

    public print(): void {
        console.log(`${this.brand} ${this.color}`);
    }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number;
    greet() {
        console.log("HELLO");
    }
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmployee extends Employee implements DoWork {
    constructor(public first: string, public last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked
    }

    doWork(): void {
        console.log("*DO WORK*")
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);

console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 11000);

console.log(bill.getPay())

// Employee
// -FullTimeEmployee
// -PartTimeEmployee

const nums: Array<number> = [];

const usernameInput = document.querySelector<HTMLInputElement>("#username")!;
const btn = document.querySelector<HTMLButtonElement>(".btn")!;
btn.append("button")

btn.addEventListener("click", function () {
    console.log("clicked!")
})

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

function identity<T>(item: T): T {
    return item;
}

interface Cat {
    name: string;
    breed: string;
}

let kitten: Cat = {
    name: "mitten",
    breed: "cat",
}

identity<number>(7)
identity<Cat>(kitten)

function getRandomElement<T>(arr: T[]): T {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

console.log(getRandomElement<string>(["he", "him", "her"]))

getRandomElement(["he", "him", "her"])

interface Person {
    name: string;
}

interface Pets {
    pets: string[];
}


function merge<T extends Person, U extends Pets>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

const comboOjb = merge({ name: 'colt' }, { pets: ["blue", "elton"] })
const comboOjb1 = merge({ name: 'Steven' }, { pets: ["bob", "brown"] })

function makeEmptyArray<T = undefined>(): T[] {
    return []
}

const undefinedArr = makeEmptyArray()
const strings = makeEmptyArray<string>()

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = []
    add(el: T) {
        this.queue.push(el)
    }
}

const songs = new Playlist<Song>()
const videos = new Playlist<Video>()

videos.add({
    title: "test",
    creator: "me",
    resolution: "1080"
})

function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3)
    }

    return value * 3;
}

const el = document.getElementById("idk");

if (el) {
    el.append("hello")
} else {
    console.log("no element found")
}

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
}

function someDemo(x: string | undefined, y: string | boolean) {
    if (x === y) {
        x.toLowerCase;
        y.toLowerCase;
    }
}

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }

    return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 160 }))

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

printFullDate("12/12/2012")

class User {
    constructor(public username: string) { }
}

class Company {
    constructor(public name: string) { }
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(entity.username)
    } else {
        console.log(entity.name)
    }
}

interface Cat {
    name: string,
    numLives: number,
}

interface Dog {
    name: string,
    breed: string,
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        return animal.numLives.toString()
    }

    return animal.name
}

// Discriminated Unions

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep{
    name: string;
    weight:number;
    age:number;
    kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;


function getFarmAnimalSound(animal: FarmAnimal) {

    switch(animal.kind) {
        case("pig"):
            return "Oink!"
        case("cow"):
            return "Moo!"
        case("rooster"):
            return "Cockadoodledo"
        case("sheep"):
            return "Baaa!"
        default:
            //we should never make it here...
            const shouldNeverGetHere: never = animal
        }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};

console.log(getFarmAnimalSound(stevie)) 