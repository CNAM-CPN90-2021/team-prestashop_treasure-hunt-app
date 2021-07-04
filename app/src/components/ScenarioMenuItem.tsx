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
      <IonCard class="scenario-menu-item" color="tertiary" routerLink={`/scenarios/${scenario.id}`}>
        <img src={scenario.imageUrl} alt={scenario.titre} />
        <IonCardHeader color="primary">
          <IonCardTitle>{scenario.titre}</IonCardTitle>
        </IonCardHeader>
      </IonCard>
  );
};

export default ScenarioMenuItem;
