import type { Card } from "../types/deck";
import type { Player } from "../types/table";

class Table {
    private players: Player[] = []; // name, money, cards
    private table: Card[] = [];
    private dealer: string = "";

    /**
     * 
     * @param players list of players names
     * @param initialMoney 
     * @param dealer 
     */

    constructor(playersNames: string[], initialMoney: number = -1, dealer: string) {
        if(playersNames.length < 2) throw new Error("Players should be more then 2");
        this.players = [...playersNames.map(p => {
            return { username: p, money: initialMoney, currentCards: [] }
        })];
        this.dealer = this.players[0]!.username;
    }
}

export default Table;