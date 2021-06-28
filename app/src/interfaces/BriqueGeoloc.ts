import { Brique } from "./Brique";
import { Coordonnees } from "./Coordonnees";

export interface BriqueGeoloc extends Brique {
    hautGauche: Coordonnees;
    basDroite: Coordonnees;
}