import { TypeBriqueEnum } from "../enum/typeBrique.enum";

export interface Brique{
    brique_id : number;
    brique_titre : string;
    brique_description: string;
    brique_type : TypeBriqueEnum;
}