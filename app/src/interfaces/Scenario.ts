import { Etapes } from "./Etapes";

export interface Scenario {
    id: number,
    titre: string,
    description: string,
    etapes: Etapes
}