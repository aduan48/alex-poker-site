import Deck from './Deck.js'
import Player from './Player.js'
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
    }

    doPlayerAction(playerID, action){
        
    }


    /**
     * adds a player to the table
     * @param  player 
     */
    addPlayer(player){
        this.players.push(player);
    }

    /**
     * the filter creates a new array without the player that disconnected
     * @param socketId of the player to be left behind
     * @returns  return true if the table is now empty, false if players remain
     */
    removePlayer(socketId){
        // filter out the player
        this.players = this.players.filter((player) => player.getId() !== socketId);
        
        return this.players.length === 0;
    }


    /**
     * deals two cards to each of the players at the table starting from the small blind
     * it also pre shuffles and shifts the button as well
     */
    startHand(indexSmallBlind){
        const numPlayers = this.players.length;
        this.deck.shuffle()
        for(let j=0; j<2; j++){
           for(let i = 0; i<numPlayers; i++){
                this.players[(indexSmallBlind+i)%numPlayers].addCards(this.deck.deal());
           }
        }
    }

    /**
     * deals a burn and the next three cards
     */
    dealFlop(){
        this.deck.deal();
        for(let i = 0; i<3; i++){
            this.communityCards.push(this.deck.deal());
        }

    }

    /**
     * deals the trun with one burn card
     */
    dealTurn(){
        this.deck.deal();
        this.communityCards.push(this.deck.deal());
    }

    /**
     * deals the river with one burn card
     */
    dealRiver(){
        this.deck.deal();
        this.communityCards.push(this.deck.deal());
    }



    /**
     * 
     * @returns if everyone folded no need for showdown
     */
    checkFoldedWin(){
        let numInGame = 0;
        for(let i = 0; i<this.players.length; i++){
            if(!(this.players[i])){
                numInGame++; //counts people who still havent folded
            }
        }

        if(numInGame == 1){
            return true; //everone except for one folded
        }

        return false;
    }

    findWinner(){

    }

    round(){
        this.deal();
        

    }
}