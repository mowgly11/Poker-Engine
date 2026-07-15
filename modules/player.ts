import type { Card } from "../types/deck";

class Player {
    private username: string;
    private money: number;
    private currentCards: Card[] = [];

    constructor(username: string, money: number) {
        this.username = username;
        this.money = money;
    }

    public getUsername() {
        return this.username;
    }

    public getCurrentCards() {
        return [...this.currentCards];
    }

    public receiveCard(card: Card[]) {
        this.currentCards.push(...card);
    }

    public bet(amount: number) {
        if (amount <= this.money) {
            this.money -= amount;
            return this.money
        } else {
            return -1;
        }
    }
}

export default Player;