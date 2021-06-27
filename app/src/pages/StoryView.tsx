import { IonPage, IonToolbar, IonContent, IonGrid, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonImg, IonCol, IonButtons, IonBackButton, IonHeader, IonTitle, IonFooter, } from "@ionic/react"
import { RouteComponentProps, useParams } from "react-router"
import CustomButton from "../components/CustomButton"
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
    console.log("currentScenario", currentScenario);
    //   const scenarioPath = scenario[0].content

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/scenarios-menu" />
                    </IonButtons>
                    <IonTitle>{currentScenario.titre}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Story src={currentScenario.imageUrl} title={currentScenario.titre} content={currentScenario.description} />
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonGrid className="container_flex_center">
                        <IonRow>
                            <IonCol>
                                <CustomButton ButtonHref={`${match.url}/Steps`} ButtonText="Commencer l'enquête" />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}
export default StoryView