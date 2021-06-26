import { Plot } from "./Plot";

export interface Etape {
    etape_id: number;
    etape_titre: string;
    etape_description: string;
    etape_status : boolean;
    scenario_id: number; 
    plot?: Plot[];
}