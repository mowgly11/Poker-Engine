import type { Card } from "../types/deck";
import Deck from "./deck";
import Player from "./player";

const deck = new Deck();

class Table {
    private players: Player[] = []; // name, money, cards
    private table: Card[] = [];
    private dealer: string = "";
    private pot: number = 0;

    /**
     * 
     * @param players list of players names
     * @param initialMoney initial amount of money that all players will have at the beginning of the game
     */

    constructor(playersNames: string[], initialMoney: number = -1) {
        if (playersNames.length < 2) throw new Error("Players should be more then 2");
        this.players = playersNames.map<Player>(p => new Player(p, initialMoney));
        this.dealer = this.players[0]!.getUsername();
    }

    public displayTable() {
        return {
            players: this.players,
            dealer: this.dealer,
            table: this.table
        }
    }

    public startGame() {
        this.players.forEach(p => p.receiveCard(deck.takeCard(2)));
    }

    public placeCard(amount: number = 1) {
        this.table.push(...deck.takeCard(amount));
    }

    public call(player: Player, amount: number) {

    }
}

export default Table;