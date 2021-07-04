import { IonPage } from "@ionic/react"
import { RouteComponentProps } from "react-router"
import BriqueImageItem from "../components/briquesComponent/BriqueImageItem"
import BriqueTexteItem from "../components/briquesComponent/BriqueTexteItem"
import Container from "../components/Container"
import PagesFooter from "../components/PagesFooter"
import PagesHeader from "../components/PagesHeader"
import { useScenarios } from "../hooks/useScenarios"
import { BriqueImage } from "../interfaces/BriqueImage"
import { Etape } from "../interfaces/Etape"
import { Plot } from "../interfaces/Plot"
import { Scenario } from "../interfaces/Scenario"
import './EtapePage.css'

interface EtapePageProps extends RouteComponentProps<{
    scenarioId: string;
    etapeId: string;
}> { }
const EtapePage: React.FC<EtapePageProps> = ({ match }) => {
    const { scenarioId, etapeId } = match.params

    const { getFirstPlot } = useScenarios();
    const firstPlot: Plot = getFirstPlot(parseInt(scenarioId), parseInt(etapeId))

    return (
        <IonPage>
            <PagesHeader hrefBackButton="/" pageTitle={''} />

            {firstPlot.briques.map((brique) => brique.type === "IMAGE" ? (<BriqueImageItem brique={brique}></BriqueImageItem>) : console.log())}
            
            <PagesFooter hrefButton="/maps" textButton="Accédez à la carte" />

        </IonPage>
    )
}

export default EtapePage