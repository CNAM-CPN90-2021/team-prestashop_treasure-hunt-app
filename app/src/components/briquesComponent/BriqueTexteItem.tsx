import "./BriqueTexteItem.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { BriqueTexte } from "../../interfaces/BriqueTexte";

interface ContainerProps {
  brique: any;
}

const BriqueTexteItem: React.FC<ContainerProps> = ({ brique }) => {
  return (
      <IonCard class="brique-texte-menu-item" >
          {/* <IonCardSubtitle>
            {brique.description}
          </IonCardSubtitle> */}
          <IonCardContent>
            {brique.text}
          </IonCardContent>
      </IonCard>
  );
};

export default BriqueTexteItem;
