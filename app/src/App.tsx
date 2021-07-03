import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomePage from "./pages/HomePage";
import { Map } from "./pages/Map";
import ScenariosPage from "./pages/ScenariosPage";
import StoryView from "./pages/StoryView";

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
import StepsView from "./pages/StepsView";
import QRCode from "./pages/QRCode";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Route Home */}
        <Route exact path={["/home", "/"]} component={HomePage} />
        {/* Route scenarios-menu */}
        <Route exact path={`/scenarios`} component={ScenariosPage} />
        {/* Route story-view */}
        <Route exact path={`/story-view/:scenarioId`} component={StoryView} />
        {/* Route story-view */}
        <Route exact path={`/story-view/:scenarioId/:stepId`} component={StepsView} />
        {/* Route map */}
        <Route exact path={`/map`} component={Map} />
        {/* Route QRCode */}
        <Route path="/QRCode" component={QRCode} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
