class Player {
    static description = "Player In Our Game";

    #score = 0;
    numLives = 10;

    constructor(first, last) {
        this.first = first;
        this.last = last;

    }

    get score() {
        return this.#score;
    }

    set score(newScore) {
        if(newScore < 0) {
            throw new Error("score must be above 0");
        }
        this.#score = newScore;
    }


    updateScore(newScore) {
        return this.#score = newScore;
    }

    taunt() {
        console.log("BOOYAH!")
    }
    loseLife() {
        this.numLives--;
        console.log(this.numLives)
    }

    #secret() {
        console.log("SECRET!!!")
    }

    get fullName() {
        return `${this.first} ${this.last}`
    }

    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }


}

class AdminPlayer extends Player {
    #isAdmin = true;

    constructor(first, last, powers) {
        super(first, last);
        this.power = powers;
    }

    get adminStatus() {
        return this.#isAdmin;
    }
}

const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore world"]);

const player1 = new Player("blue", "steele");
// console.log(player1.numLives)
console.log(player1.fullName)
player1.fullName = "Amy Adams"
console.log(player1.fullName)


const player2 = new Player("charlie", "brown");
player2.taunt()


