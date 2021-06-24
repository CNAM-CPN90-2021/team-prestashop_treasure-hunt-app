import {IonPage,IonToolbar,IonContent,IonGrid,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonRow,IonImg,IonCol,} from "@ionic/react"
import { useParams } from "react-router"
import data from "../datas/dataStructureModule.json"
import { Scenario } from "../interfaces/Scenario"



const StoryView : React.FC = () => {

  // get the params from URL
  const {id} : {id : string} =  useParams()

  // filtering the data for display the record by ID
  let scenario : Scenario[] = data.filter(d => (d.scenario_id === parseInt(id)))


    return(
    
      <IonPage>
        <IonToolbar>
        </IonToolbar>
        <IonContent fullscreen>
            <IonGrid className="container_flex_center">
                <IonRow className="ion-align-item-center" >
                    <IonCol size="12" >
                        <IonCard>
                            <IonImg 
                            src={scenario[0].scenario_content.image} alt={scenario[0].scenario_content.titre} 
                            />
                        </IonCard>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="12">
                        <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>
                            {scenario[0].scenario_content.titre}
                            </IonCardTitle>
                            <IonCardSubtitle>
                                
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                                {scenario[0].scenario_content.content}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
       </IonGrid>
        </IonContent>
        <IonToolbar>
        </IonToolbar>
    </IonPage>


    )

}
export default StoryView