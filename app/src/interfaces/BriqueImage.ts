import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { Brique } from "./Brique";

export interface BriqueImage extends Brique {
    urlImage: string;
    texteAccessibilite?: string;
}