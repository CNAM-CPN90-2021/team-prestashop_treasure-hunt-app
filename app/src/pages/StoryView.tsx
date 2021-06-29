import { IonPage, IonContent} from "@ionic/react"
import { RouteComponentProps } from "react-router"
import Container from "../components/Container"
import PagesFooter from "../components/PagesFooter"
import PagesHeader from "../components/PagesHeader"
import Story from "../components/Story"
// import data from "../datas/dataStructureModule.json"
import { useScenarios } from "../hooks/useScenarios"
import { Scenario } from "../interfaces/Scenario"

interface StoryDetailPageProps extends RouteComponentProps<{
    id: string;
}> { }

const StoryView: React.FC<StoryDetailPageProps> = ({ match }) => {

    // we can also use this code for get params from url
    //  const {id} : {id : string} =  useParams()

    // filtering the data for display the record by ID
    const { filterById } = useScenarios();
    const currentScenario: Scenario = filterById(parseInt(match.params.id))
    
    return (
        <IonPage>
            {/* component page header src : component/PagesHeader.tsx */}
            <PagesHeader pageTitle = {currentScenario.titre} hrefBackButton = "/scenarios-menu" />

                {/* component container  src : component/Container.tsx */}
                <Container>

                {/* component Story  src : component/Story.tsx */}
                <Story src={currentScenario.imageUrl} title={currentScenario.titre} content={currentScenario.description} />

                </Container>
             {/* component PagesFooter  src : component/PagesFooter.tsx */}
            <PagesFooter hrefButton={`${match.url}/steps/`}   textButton={"Commencer l'enquête"} />

        </IonPage>
    )
}
export default StoryView