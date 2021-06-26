import { TypeBriqueEnum } from "../enum/typeBrique.enum";
import { Brique } from "./Brique";
import { Coordonnees } from "./Coordonnees";

export interface BriqueGeoloc extends Brique {
    briqueGeoloc_hautGauche: Coordonnees;
    briqueGeoloc_basDroite: Coordonnees;
}