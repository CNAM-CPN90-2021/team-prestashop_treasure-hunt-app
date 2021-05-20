import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow , IonToolbar} from "@ionic/react"
import  Img1 from "../images/img1.jpg"

const Histoire : React.FC = () => {

    return(

        <IonPage>
            <IonToolbar>
            </IonToolbar>
            <IonContent fullscreen>
                <IonGrid className="container_flex_center">
                    <IonRow className="ion-align-item-center" >
                        <IonCol size="12
                        " >
                            <IonCard>
                                <IonImg src={Img1} alt="Image1" />
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>
                                    This is just a title
                                </IonCardTitle>
                                <IonCardSubtitle>
                                    this is just a subtitle
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, architecto illum. Inventore voluptatem reprehenderit saepe quas? Necessitatibus amet quaerat impedit?
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
export default Histoire