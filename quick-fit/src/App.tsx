import React, { useState, useContext } from "react";
import { IonTabBar, IonTabButton, IonIcon, IonTabs } from "@ionic/react";
import { gridOutline, cartOutline, accessibilityOutline } from "ionicons/icons";

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Brands from "./pages/Brands";
import Checkout from "./pages/Checkout";
import Description from "./pages/Description";
import Modelbody from "./pages/Modelbody";
import Login from "./pages/Login";
import ModelChoose from "./pages/ModelChoose";
import FLGD from "./pages/FLGD";
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
// import './theme/variables.css'
import AeonArmor from "./pages/Aeonarmor";
import Cart from "./pages/Cart";
import Threedee from "./pages/Threedee";
import Cartt from "./CartSource/Cartt";
import UIContext from "./util/Context-API-login";
import BigShirt from "./pages/BigShirt";

const App: React.FC = () => {
  const [cart, setCart] = useState<Cartt[]>([]);
  const { showTabs } = useContext(UIContext);

  let tabBar = showTabs ? undefined : { display: "none" };

  const addCart = (obj: Cartt) => {
    setCart([...cart, obj]);
  };
  const removeCart = (uniqueId: string | undefined) => {
    const removeItem = cart.filter((print) => print.uniqueId !== uniqueId);
    setCart(removeItem);
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/Login">
              <Login />
            </Route>
            {/*Brands page */}
            <Route exact path="/Brands">
              <Brands />
            </Route>
            {/*Brands Page */}

            <Route exact path="/Cart">
              <Cart passDownTo={cart} removeIteem={removeCart} />
            </Route>

            <Route exact path="/FLGD">
              <FLGD passUpApp={addCart} />
            </Route>

            <Route exact path="/AeonArmor">
              <AeonArmor />
            </Route>

            <Route exact path="/Checkout">
              <Checkout passDownTo={cart} />
            </Route>

            <Route exact path="/Description">
              <Description />
            </Route>

            <Route exact path="/Threedee">
              <Threedee />
            </Route>

            <Route exact path="/ModelChoose">
              <ModelChoose />
            </Route>

            <Route exact path="/BigShirt">
              <BigShirt />
            </Route>

            <Route exact path="/Modelbody">
              <Modelbody />
            </Route>
            <Route exact path="/">
              <Redirect to="/Login" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" style={tabBar}>
            <IonTabButton tab="Brands" href="/brands">
              <IonIcon icon={gridOutline} />
            </IonTabButton>

            <IonTabButton tab="Models" href="/Threedee">
              <IonIcon icon={accessibilityOutline} />
            </IonTabButton>

            <IonTabButton tab="Cart" href="/Cart">
              <IonIcon icon={cartOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
