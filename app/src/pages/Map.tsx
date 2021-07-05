import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import PagesHeader from "../components/PagesHeader";
import Container from "../components/Container";
import PagesFooter from "../components/PagesFooter";
import { RouteComponentProps } from "react-router-dom";

interface MapPageProps extends RouteComponentProps<{
  scenarioId: string;
  etapeId: string;
}> { }

const Map : React.FC<MapPageProps> = ({match}) => {
  const { scenarioId, etapeId } = match.params

  const [viewport, setViewport] = useState({
    latitude: 47.7395389333945,
    longitude: 7.329169414309033,
    zoom: 12,
  });
  return (
  <IonPage>

    <PagesHeader pageTitle="Carte" hrefBackButton={`/scenarios/${scenarioId}/${etapeId}`} />

      <Container>
        <div style={{ width: "100%", height: "90vh" }}>
          <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
            width="100%"
            height="100%"
          >
            <Marker 
              latitude={47.7395389333945} 
              longitude={7.329169414309033}
              offsetLeft={(-1 * 40) /2}
              offsetTop={(-1 * 40) /2}
              >
              <div
                style={{
                  background: "red",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
            </Marker>
            <Marker 
              latitude={47.745} 
              longitude={7.33}
              offsetLeft={(-1 * 40) /2}
              offsetTop={(-1 * 40) /2}
              >
              <div
                style={{
                  background: "blue",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "white 2px solid",
                  boxShadow: "0 0 0 15px rgba(0, 0, 255, 0.4)",
                }}
              ></div>
            </Marker>
          </ReactMapGL>
        </div>
      </Container>

      <PagesFooter hrefButton={`/scenarios/${scenarioId}/${etapeId}/QRCode`} textButton="Vous êtes arrivé !! scanner le QR code" />
    </IonPage>
  );
}

export default Map