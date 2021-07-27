import React, { useState } from 'react'
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonTabs,
} from '@ionic/react'
import {
  calendar,
  personCircle,
  map,
  informationCircle,
  gridOutline,
  cartOutline,
  cameraOutline,
} from 'ionicons/icons'

import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Brands from './pages/Brands'
import Checkout from './pages/Checkout'
import Description from './pages/Description'
import Modelbody from './pages/Modelbody'

import FLGD from './pages/FLGD'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import AeonArmor from './pages/Aeonarmor'
import Cart from './pages/Cart'
import Threedee from './pages/Threedee'
import Cartt from './CartSource/Cartt'
const App: React.FC = () => {
  const [cart, setCart] = useState<Cartt[]>([])

  const addCart = (obj: Cartt) => {
    setCart([...cart, obj])
  }
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/*Brands page */}
            <Route exact path='/Brands'>
              <Brands />
            </Route>
            {/*Brands Page */}

            <Route exact path='/Cart'>
              <Cart passDownTo={cart} />
            </Route>

            <Route exact path='/'>
              <Redirect to='/Models' />
            </Route>

            <Route exact path='/FLGD'>
              <FLGD passUpApp={addCart} />
            </Route>

            <Route exact path='/AeonArmor'>
              <AeonArmor />
            </Route>

            <Route exact path='/Checkout'>
              <Checkout />
            </Route>

            <Route exact path='/Description'>
              <Description />
            </Route>

            <Route exact path='/Threedee'>
              <Threedee />
            </Route>

            <Route exact path='/Modelbody'>
              <Modelbody />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='Brands' href='/brands'>
              <IonIcon icon={gridOutline} />
              <IonLabel>Brands</IonLabel>
            </IonTabButton>

            <IonTabButton tab='Models' href='/Description'>
              <IonIcon icon={cameraOutline} />
              <IonLabel>Models</IonLabel>
            </IonTabButton>

            <IonTabButton tab='Cart' href='/Cart'>
              <IonIcon icon={cartOutline} />
              <IonLabel>Cart</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
