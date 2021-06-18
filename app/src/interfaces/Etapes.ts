import { Plot } from "./Plot";

export interface Etapes {
    etape_id: number;
    etape_titre: string;
    etape_description: string;
    etape_status : boolean;
    plot?: Plot[]
}