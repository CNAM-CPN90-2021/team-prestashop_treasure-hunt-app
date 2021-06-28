import "./ScenarioMenuItem.css";
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
import { BriqueTexte } from "../interfaces/BriqueTexte";

interface ContainerProps {
  brique: BriqueTexte;
}

const BriqueTexteItem: React.FC<ContainerProps> = ({ brique }) => {
  return (
      <IonCard class="brique-texte-menu-item" color="tertiary" routerLink={`/story-view/${brique.id}`}>
          <IonCardSubtitle>
            {brique.description}
          </IonCardSubtitle>
          <IonCardContent>
            {brique.contenuHtml}
          </IonCardContent>
      </IonCard>
  );
};

export default BriqueTexteItem;
