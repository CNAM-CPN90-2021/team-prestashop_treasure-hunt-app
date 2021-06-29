import { Etape } from "./Etape";

export interface Scenario {
    id: number;
    titre: string;
    description: string;
    imageUrl?: string;
    etapes: Etape[];
}