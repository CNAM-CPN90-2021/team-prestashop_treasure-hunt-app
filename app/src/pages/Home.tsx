import { IonPage ,IonContent , IonImg, IonToolbar } from "@ionic/react";
import CustomButton from "../components/CustomButton";
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
            <CustomButton ButtonHref="/scenarios-menu" ButtonText="Voir les scenarios" />
            </div>
        </IonContent>
            <IonToolbar>
            </IonToolbar>
        </IonPage>
    )

}
export default Home;