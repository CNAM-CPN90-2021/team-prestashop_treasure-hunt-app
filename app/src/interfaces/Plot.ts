import { TypePlotEnum } from "../enum/typePlot.enum";
import { Brique } from "./Brique";

export interface Plot {

    plot_id : number;
    plot_titre : string;
    plot_description: string;
    plot_type: TypePlotEnum;
    brique?:Brique[];

}