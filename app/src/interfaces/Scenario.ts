import { Etape } from "./Etape";
import { ScenarioContent } from "./ScenarioContent";

export interface Scenario {
    scenario_id: number;
    scenario_titre: string;
    scenario_description?: string;
    scenario_content: ScenarioContent;
    etape: Etape[];
}   