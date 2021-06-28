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
import { BriqueImage } from "../interfaces/BriqueImage";

interface ContainerProps {
  brique: BriqueImage;
}

const BriqueImageItem: React.FC<ContainerProps> = ({ brique }) => {
  return (
      <IonCard class="brique-image-menu-item" color="tertiary" routerLink={`/story-view/${brique.id}`}>
        <img src={brique.urlImage} alt={brique.texteAccessibilite} />
      </IonCard>
  );
};

export default BriqueImageItem;
