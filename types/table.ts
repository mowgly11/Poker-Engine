import type { Card } from "./deck";

export type Player = {
    username: string;
    money: number;
    currentCards?: Card[]
}