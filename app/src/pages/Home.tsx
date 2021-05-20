import { IonPage ,IonContent , IonButton , IonIcon , IonImg, IonToolbar } from "@ionic/react";
import search from '../images/search.png';
import './Home.css'

const Home : React.FC = () => {

    return(
        <IonPage>
            <IonToolbar>
            </IonToolbar>
        <IonContent  fullscreen>
            <div className="container_flex_center">
            <IonImg className="searchImg" src= {search} alt="search" />
            <h2>Prêt à jouer ?</h2>
            <IonButton fill="clear" href="/scenarios-menu">Commencer une enquête 
            <IonIcon name="arrow-forward-outline"></IonIcon>
            </IonButton>
            </div>
        </IonContent>
            <IonToolbar>
            </IonToolbar>
        </IonPage>
    )

}
export default Home;