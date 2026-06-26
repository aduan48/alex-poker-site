import Card from './Card.js';

/**
 * This is my Deck class
 */
export default class Deck{

    /**
     * constructs a 52 long array with cards
     */
    constructor(){
        this.deck = [];
        this.suits = ["S", "C", "H", "D"]

        for(let i = 2; i <= 14; i++){
            for(let j = 0; j<this.suits.length; j++){
                const newCard = new Card(this.suits[j],i);
                this.deck.push(newCard)
            }
        }
    }

    /**
     * randmoizes the order of the cards within the arrau
     */
    shuffle(){
        for(let i = 0; i< this.deck.length; i++){
            let temp = this.deck[i];
            const randomIndex = Math.floor(Math.random() * 52);
            this.deck[i]= this.deck[randomIndex];
            this.deck[randomIndex] = temp;

        }
    }

    /**
     * 
     * @param index of the card
     * @returns the card at that index
     */
    getCard(index){
        return this.deck[index];
    }

    /**
     * @returns the first card and the pushes it to the end
     */
    deal(){
        dealtCard = this.deck.shift();
        this.deck.push(dealtCard)
        return dealtCard
    }

    /**
     * 
     * @returns a too string method with the length and every card
     */
    toString() {
       let str = "length: " + this.deck.length + "\n";
       this.deck.forEach(card => str = str + card + "\n");
       return str;
    }
}