import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";


import HomePage from "./pages/HomePage";
import Map  from "./pages/Map";
import ScenariosPage from "./pages/ScenariosPage";
import QRCode from "./pages/QRCode";
import ScenarioDetailPage from "./pages/ScenarioDetailPage";
import EtapePage from "./pages/EtapePage";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Route Home */}
        <Route exact path={["/home", "/"]} component={HomePage} />
        {/* Route scenarios-menu */}
        <Route exact path={`/scenarios`} component={ScenariosPage} />
        {/* Route to scenario details page */}
        <Route exact path={`/scenarios/:scenarioId`} component={ScenarioDetailPage} />
        {/* Route story-view */}
        <Route exact path={`/scenarios/:scenarioId/:etapeId`} component={EtapePage} />
        {/* Route map */}
        <Route exact path={`/scenarios/:scenarioId/:etapeId/map`} component={Map} />
        {/* Route QRCode */}
        <Route path="/scenarios/:scenarioId/:etapeId/QRCode" component={QRCode} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
