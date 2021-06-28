import { Etape } from "./Etape";
import { ScenarioContent } from "./ScenarioContent";

export interface Scenario {
    id: number;
    titre: string;
    description: string;
    imageUrl?: string;
    // content?: ScenarioContent;
    etapes: Etape[];
}