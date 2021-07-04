import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import ScenarioMenuItem from "../components/ScenarioMenuItem";
import { useScenarios } from "../hooks/useScenarios";
import "./ScenariosPage.css";

const ScenariosPage: React.FC<RouteComponentProps> = ({ match }) => {
  /* Fetch all scenarios from the API */
  const { scenarios } = useScenarios();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
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
          {/* Display an icon for each available scenario */}
          <IonRow>
            {scenarios.map((scenario) => (
              <IonCol key={scenario.id}>
                <ScenarioMenuItem scenario={scenario} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default ScenariosPage;
