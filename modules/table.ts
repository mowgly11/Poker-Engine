import type { Card } from "../types/deck";
import type { Player } from "../types/table";
import Deck from "./deck";

const deck = new Deck();

class Table {
    private players: Player[] = []; // name, money, cards
    private table: Card[] = [];
    private dealer: string = "";

    /**
     * 
     * @param players list of players names
     * @param initialMoney initial amount of money that all players will have at the beginning of the game
     */

    constructor(playersNames: string[], initialMoney: number = -1) {
        if(playersNames.length < 2) throw new Error("Players should be more then 2");
        this.players = [...playersNames.map(p => {
            return { username: p, money: initialMoney, currentCards: [] }
        })];
        this.dealer = this.players[0]!.username;
    }

    public displayTable() {
        return {
            players: this.players,
            dealer: this.dealer,
            table: this.table
        }
    }

    public startGame() {
        this.players.forEach(p => {
            p.currentCards?.push(...deck.takeCard(2));
        });
    }

    public placeCard(amount: number = 1) {
        this.table.push(...deck.takeCard(amount));
    }
}

export default Table;