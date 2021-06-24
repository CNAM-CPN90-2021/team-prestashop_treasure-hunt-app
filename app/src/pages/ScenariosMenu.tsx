import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ScenarioMenuItem from "../components/ScenarioMenuItem";
import { useScenarios } from "../hooks/useScenarios";
import "./ScenariosMenu.css";

const ScenariosMenu: React.FC = () => {
  const { scenarios } = useScenarios();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scénarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {scenarios.map((scenario) => (
              <IonCol key={scenario.scenario_id}>
                <ScenarioMenuItem scenario={scenario}/>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ScenariosMenu;
