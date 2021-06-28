import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { TypePlotEnum } from "../enum/typePlot.enum";
import { Brique } from "./Brique";
import { BriqueImage } from "./BriqueImage";
import { BriqueTexte } from "./BriqueTexte";

export interface Plot {
    id: number;
    titre: string;
    description: string;
    type: string;
    briques: (BriqueTexte | BriqueImage)[];

}