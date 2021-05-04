import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

export function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Une super carte</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ width: "100%", height: "80vh" }}>
          <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
            width="100%"
            height="100%"
          />
        </div>
      </IonContent>
    </IonPage>
  );
}
