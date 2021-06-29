import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import { Map } from "./pages/Map";
import ScenariosMenu from "./pages/ScenariosMenu";
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
        <Route exact path={["/home" , "/"]} component={Home} />

       {/* Route scenarios-menu */}
        <Route exact path="/scenarios-menu" component={ScenariosMenu} />

        {/* Route map */}
        <Route path="/map" component={Map}/>

        {/* Route QRCode */}
        <Route path="/QRCode" component={QRCode}/>
  

        {/* Route story-view */}
        <Route path={`/story-view/:id`} component={StoryView} />

        {/* Route story-view */}
        <Route path={`/story-view/:id/Steps/:etapeId`} component={StepsView} />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
