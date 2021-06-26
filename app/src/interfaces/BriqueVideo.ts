import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { Brique } from "./Brique";

export interface BriqueVideo extends Brique {
    briqueImage_urlVideo: string;
    briqueImage_TexteAccessibilite: string;
}