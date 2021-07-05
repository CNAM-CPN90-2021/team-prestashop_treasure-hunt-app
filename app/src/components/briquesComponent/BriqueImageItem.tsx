import "./BriqueImageItem.css";
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
import { BriqueImage } from "../../interfaces/BriqueImage";

interface ContainerProps {
// FIXME: Passage de type any pour résoudre pb typage dans EtapePage.tsx
  brique: any;
}

const BriqueImageItem: React.FC<ContainerProps> = ({ brique }) => {
  return (
      <IonCard class="brique-image-menu-item" >
        <img src={brique.urlImage} alt={brique.texteAccessibilite} />
      </IonCard>
  );
};

export default BriqueImageItem;
