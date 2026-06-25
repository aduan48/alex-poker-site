/**
 * The card class
 */
export default class Card{

    /**
     * the symbol repersents the string repersentaton of teh card
     * @param  suit suit of the card
     * @param value the value of ther card
     */
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        if(value==14){
            this.symbol= "A" + suit;
        }else if(value == 13){
            this.symbol= "K" + suit;
        }
        else if(value == 12){
            this.symbol= "Q" + suit;
        }
        else if(value == 11){
            this.symbol= "J" + suit;
        }else{
            this.symbol = "" + value + suit;
        }
    }

    /**
     * 
     * @returns the value of the card
     */
    getValue(){
        return this.value;
    }

    /**
     * 
     * @returns the suit of the card
     */
    getSuit(){
        return this.suit;
    }

    /**
     * 
     * @returns the string repersentation of the card
     */
    toString() {
        return this.symbol;
    }
}