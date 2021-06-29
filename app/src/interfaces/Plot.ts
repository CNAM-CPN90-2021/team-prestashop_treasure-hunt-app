import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { TypePlotEnum } from "../enum/typePlot.enum";
import { BriqueQuestion } from "./BriqeQuestion";
import { Brique } from "./Brique";
import { BriqueBonneReponse } from "./BriqueBonneReponse";
import { BriqueImage } from "./BriqueImage";
import { BriqueMauvaiseReponse } from "./BriqueMauvaiseReponse";
import { BriqueNom } from "./BriqueNom";
import { BriqueQRCode } from "./BriqueQRCode";
import { BriqueTexte } from "./BriqueTexte";

export interface Plot {
    id: number;
    titre: string;
    description: string;
    type: string;
    status : boolean;
    briques: (BriqueTexte | BriqueImage |  BriqueNom  | BriqueBonneReponse | BriqueMauvaiseReponse | BriqueQRCode | BriqueQuestion)[];

}