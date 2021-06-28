import { Plot } from "./Plot";

export interface Etape {
    id: number;
    titre: string;
    description: string;
    plots: Plot[];
}