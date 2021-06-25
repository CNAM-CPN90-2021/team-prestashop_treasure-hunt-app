import {IonPage,IonToolbar,IonContent,IonGrid,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonRow,IonImg,IonCol, IonButtons, IonBackButton, IonHeader, IonTitle, IonFooter,} from "@ionic/react"
import { RouteComponentProps, useParams } from "react-router"
import CustomButton from "../components/CustomButton"
import Story from "../components/Story"
import data from "../datas/dataStructureModule.json"
import { Scenario } from "../interfaces/Scenario"
interface StoryDetailPageProps extends RouteComponentProps<{
    id: string;
  }> {}

const StoryView : React.FC<StoryDetailPageProps> = ({match}) => {

// we can also use this code for get params from url
//  const {id} : {id : string} =  useParams()

  // filtering the data for display the record by ID
  const scenario : Scenario[] = data.filter(d => (d.scenario_id === parseInt(match.params.id)))
  const scenarioPath = scenario[0].scenario_content

    return(
    
      <IonPage>
 
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref="/scenarios-menu" />
            </IonButtons>
            <IonTitle>{scenarioPath.titre}</IonTitle>
            </IonToolbar>
      </IonHeader>

        <IonContent>
            <Story src={scenarioPath.image} title={scenarioPath.titre} content={scenarioPath.content} />
        </IonContent>
        <IonFooter>
            <IonToolbar>
            <IonGrid className="container_flex_center">    
                <IonRow>
                    <IonCol>
                        <CustomButton ButtonHref = {`${match.url}/Steps`} ButtonText="Commencer l'enquête" />
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonToolbar>
        </IonFooter>
    </IonPage>


    )

}
export default StoryView