import Deck from './Deck.js';
import Table from './Table.js'
import Player from './Player.js'

// 1. Create a new instance of the deck
const myDeck = new Deck();

// 2. Test your toString() method to see if the deck generated correctly
console.log("--- Testing Deck Creation ---");
console.log(myDeck.toString());

// 3. Optional: Test accessing an individual card from the array
console.log("--- Testing Individual Card Access ---");
console.log(`The first card in the deck is: ${myDeck.deck[0]}`);


console.log("--- Testing shuffle Creation ---");
myDeck.shuffle();
console.log(myDeck.toString())

let table = new Table(6868);

let alex = new Player(1,"Alex", 1000);
let bob = new Player(2,"Bob", 1000);

table.addPlayer(alex);
table.addPlayer(bob);

table.deal();

console.log(alex.toString())
console.log(bob.toString())
console.log(table.deck)