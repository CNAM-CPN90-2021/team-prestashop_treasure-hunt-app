import { IonPage } from "@ionic/react"
import { RouteComponentProps } from "react-router"
import Container from "../components/Container"
import PagesFooter from "../components/PagesFooter"
import PagesHeader from "../components/PagesHeader"
import Story from "../components/Story"
import { useScenarios } from "../hooks/useScenarios"
import { Etape } from "../interfaces/Etape"
import { Scenario } from "../interfaces/Scenario"

interface ScenarioDetailPageProps extends RouteComponentProps<{
    scenarioId: string;
}> { }

const ScenarioDetailPage: React.FC<ScenarioDetailPageProps> = ({ match }) => {

    const { filterById, getFirstEtape } = useScenarios();
    const scenarioId: number = parseInt(match.params.scenarioId)
    const scenario: Scenario = filterById(scenarioId)
    const firstEtape: Etape = getFirstEtape(scenario.id)

    console.log("firstEtape", firstEtape);
    
    return (
        <IonPage>
            {/* component page header src : component/PagesHeader.tsx */}
            <PagesHeader pageTitle={scenario.titre} hrefBackButton={`/scenarios`} />

            {/* component container  src : component/Container.tsx */}
            <Container>

                {/* component Story  src : component/Story.tsx */}
                <Story src={scenario.imageUrl} title={scenario.titre} content={scenario.description} />

            </Container>
            {/* component PagesFooter  src : component/PagesFooter.tsx */}
            <PagesFooter hrefButton={`/scenarios/${match.params.scenarioId}/${firstEtape.id}`} textButton={"Commencer l'enquête"} />

        </IonPage>
    )
}
export default ScenarioDetailPage
