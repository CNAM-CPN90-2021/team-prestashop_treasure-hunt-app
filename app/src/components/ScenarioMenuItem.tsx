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
    <IonCard routerLink={`/story-view/${scenario.scenario_id}`}>
      <img src={scenario.scenario_content.image} alt={scenario.scenario_content.titre} />
      <IonCardHeader>
        <IonCardTitle>{scenario.scenario_content.titre}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{scenario.scenario_content.content}</IonCardContent>
    </IonCard>
  );
};

export default ScenarioMenuItem;
