import Card from "./Card.js";

/**
 * this is the player class
 */
export default class Player{

    /**
     * 
     * @param id socket Id
     * @param name name of the player
     * @param chips the number of chips they have
     */
    constructor(id,name,chips){
        this.id = id;
        this.name = name;
        this.chips = chips;
        this.folded = false;
        this.hand = [];
    }

    /**
     * adds a card to their hand
     * @param card 
     */
    addCards(card){
        this.hand.push(card);
    }

    /**
     * resets them by making them not folded yet and changing the array of their hand to empty
     */
    reset(){
        this.folded = false;
        this.hand.length = 0;
    }

    /**
     * 
     * @returns a string repsersantation of their name chips and their hand if they have one
     */
    toString(){
        if(this.hand){
            return this.name + " " + this.chips + " "+ this.hand[0] + " "+this.hand[1];
        }
        
        return this.name + " " + this.chips;
        
    }
}