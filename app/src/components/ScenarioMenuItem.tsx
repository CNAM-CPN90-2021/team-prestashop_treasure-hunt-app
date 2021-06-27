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
import { Scenario } from "../interfaces/Scenario";

interface ContainerProps {
  scenario: Scenario;
}

const ScenarioMenuItem: React.FC<ContainerProps> = ({ scenario }) => {
  return (
    <IonCard  routerLink={`/story-view/${scenario.id}`}>
      <img src={scenario.imageUrl} alt={scenario.titre} />
      <IonCardHeader>
        <IonCardTitle>{scenario.titre}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{scenario.description}</IonCardContent>
    </IonCard>
    
  );
};

export default ScenarioMenuItem;
