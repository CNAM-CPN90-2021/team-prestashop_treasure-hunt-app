import { BriqueTexte } from "./BriqueTexte";

export interface BriqueQRCode extends BriqueTexte {
    scanneResultat : string;
}