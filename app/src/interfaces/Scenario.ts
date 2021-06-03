import { Etapes } from "./Etapes";

export interface Scenario {
    id: number,
    titre: string,
    description?: string,
    imageUrl?: string,
    etapes?: Etapes
}   