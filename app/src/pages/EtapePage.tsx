import { IonCol, IonGrid, IonPage, IonRow } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import BriqueImageItem from "../components/briquesComponent/BriqueImageItem";
import BriqueTexteItem from "../components/briquesComponent/BriqueTexteItem";
import Container from "../components/Container";
import PagesFooter from "../components/PagesFooter";
import PagesHeader from "../components/PagesHeader";
import { useScenarios } from "../hooks/useScenarios";
import { Plot } from "../interfaces/Plot";
import "./EtapePage.css";

interface EtapePageProps
  extends RouteComponentProps<{
    scenarioId: string;
    etapeId: string;
  }> {}
const EtapePage: React.FC<EtapePageProps> = ({ match }) => {
  const { scenarioId, etapeId } = match.params;

  const { getFirstPlot } = useScenarios();
  const firstPlot: Plot = getFirstPlot(parseInt(scenarioId), parseInt(etapeId));

  return (
    <IonPage>
      <PagesHeader
        hrefBackButton={`/scenarios/${match.params.scenarioId}`}
        pageTitle={`Scenario ${scenarioId}`}
      />
      <Container>
        <IonGrid className="container_flex_center">
          <IonRow className="ion-align-item-center">
            <IonCol size="12">
              {firstPlot.briques.map((brique) => {
                /** Je favoriserai l'utilisation d'un if pour la lisibilité */
                if (brique.type === "IMAGE") {
                  return (
                    <BriqueImageItem
                      key={brique.id}
                      brique={brique}
                    ></BriqueImageItem>
                  );
                }
                return null;
              })}
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-item-center">
            <IonCol size="12">
              {firstPlot.briques.map((brique) =>
                brique.type === "TEXTE" ? (
                  <BriqueTexteItem
                    key={brique.id}
                    brique={brique}
                  ></BriqueTexteItem>
                ) : (
                  /* Pourquoi un console.log() ?? */
                  console.log()
                )
              )}
            </IonCol>
          </IonRow>
        </IonGrid>

        <PagesFooter
          hrefButton={`/scenarios/${scenarioId}/${etapeId}/map`}
          textButton="Accédez à la carte"
        />
      </Container>
    </IonPage>
  );
};

export default EtapePage;
