import Deck from './Deck.js'

/**
 * this holds all game logic
 */
export default class Table{

    /**
     * creates an empty table
     * @param tableId 
     */
    constructor(tableId){
        this.tableId = tableId;
        this.players = [];
        this.pot = 0;
        this.communityCards = [];
        this.deck = new Deck();
        this.phase= "waiting";
        this.indexFirstPlayer = 0;
    }

    /**
     * adds a player to the table
     * @param  player 
     */
    addPlayer(player){
        this.players.push(player);
    }

    /**
     * deals two cards to each of the players at the table, it also pres shuffles and shifts the button as well
     */
    deal(){
        const numPlayers = this.players.length;
        this.deck.shuffle()
        for(let j=0; j<2; j++){
           for(let i = 0; i<numPlayers; i++){
                this.players[(this.indexFirstPlayer+i)%numPlayers].addCards(this.deck.getCard(j*numPlayers+i));
           }
        }

        this.indexFirstPlayer++; 
    }
}