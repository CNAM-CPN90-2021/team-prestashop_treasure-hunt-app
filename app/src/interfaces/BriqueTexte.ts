import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { Brique } from "./Brique";

export interface BriqueTexte extends Brique {
    briqueTexte_contenuHtml: string;
}