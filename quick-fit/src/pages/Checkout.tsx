import React, { useState, useContext, useEffect } from 'react'
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
  IonBackButton,
  IonButtons,
  IonItem,
  IonList,
  IonItemDivider,
  IonInput,
  IonButton,
} from '@ionic/react'
import BrandComponent from '../components/BrandComponent'
import {
  calendar,
  personCircle,
  map,
  informationCircle,
  gridOutline,
  cartOutline,
  cameraOutline,
} from 'ionicons/icons'

const Checkout: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonCard>
              <img
                src='https://i.imgur.com/YItDaWu.png'
                height='120'
                width='120 '
              />
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardContent>Mens T Shirt</IonCardContent>
              <IonCardContent>$19.99</IonCardContent>
              <IonCardContent>
                <IonButton fill='outline' size='default' routerLink='Threedee'>
                  <IonIcon icon={cameraOutline} />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}
export default Checkout
