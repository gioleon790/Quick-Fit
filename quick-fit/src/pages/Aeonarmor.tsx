import React, { useState, useContext, useEffect, Fragment } from 'react'
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
  IonAlert,
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
  trashOutline,
  accessibilityOutline,
  arrowBackOutline,
} from 'ionicons/icons'
import './Checkout.css'

const Aeonarmor: React.FC = () => {
  return (
    <IonPage className=''>
      <IonContent className=''>
        <h1 className='ion-text-center'>A E O N A R M O R</h1>
      </IonContent>
    </IonPage>
  )
}

export default Aeonarmor
