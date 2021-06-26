import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { Brique } from "./Brique";

export interface BriqueImage extends Brique {
    briqueImage_urlImage: string;
    briqueImage_TexteAccessibilite: string;
}