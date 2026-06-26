export default class PokerGame {
    constructor(table){
        this.table = table;
        this.smallBlindIndex = 0;
        this.bigBlindIndex = 1;
        this.currentTurnIndex = 0;//keeps track of what stage the game is at
    }

    startRound(){
        //starts the round
    }

    handleAction(playerId, action, amount){
        //gets the action of each player
    }

    advanceTurn(){

    }

    moveToNextPhase(){
        //progresses the turn index
    }

    determineWinner(){
        //returns a winnder
    }
}