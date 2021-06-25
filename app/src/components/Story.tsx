import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react"


interface story {
    src : string;
    title :string;
    content : string;
}

const Story : React.FC<story> = ({src , title , content}) => {

    return(
        <IonGrid className="container_flex_center">
                <IonRow className="ion-align-item-center" >
                    <IonCol size="12" >
                        <IonCard>
                            <IonImg src={src} alt={title} />
                        </IonCard>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="12">
                        <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{title}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>{content}</IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
       </IonGrid>
    )

}

export default Story