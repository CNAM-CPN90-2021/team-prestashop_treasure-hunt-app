import { Etapes } from "./Etapes";
import { ScenarioContent } from "./ScenarioContent";

export interface Scenario {
    scenario_id: number;
    scenario_titre: string;
    scenario_description?: string;
    scenario_content:ScenarioContent;
    etapes?: Etapes[];
}   