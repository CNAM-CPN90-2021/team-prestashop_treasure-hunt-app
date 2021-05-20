import { IonPage ,IonContent , IonButton , IonIcon , IonImg } from "@ionic/react";
import search from '../images/search.png';
import './Home.css'

const Home : React.FC = () => {

    return(
        <IonPage>
        <IonContent  fullscreen>
            <div className="container_menu1">
            <IonImg className="searchImg" src= {search} alt="search" />
            <h2>Prêt à jouer ?</h2>
            <IonButton fill="clear" href="/scenarios-menu">Commencer une enquête 
            <IonIcon name="arrow-forward-outline"></IonIcon>
            </IonButton>
            </div>
        </IonContent>
        </IonPage>
    )

}
export default Home;