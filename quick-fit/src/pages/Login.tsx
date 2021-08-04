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
import './Brands.css'
import UIContext from '../util/Context-API-login'

const Login: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext)

  useEffect(() => {
    setShowTabs(false)

    return () => {
      setShowTabs(true)
    }
  })

  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCardHeader className='ion-text-center'>Sign in</IonCardHeader>
            <IonCard>
              <img
                src='https://i.imgur.com/axid879.jpg'
                alt=''
                width='200'
                height='200'
              />
            </IonCard>
            <IonCardHeader>New To QuickFit? Sign Up</IonCardHeader>
            <IonCard> Continue With Google</IonCard>
            <IonCard>Continue With Apple</IonCard>

            <h6>--------Or Continue With Email---------</h6>

            <h2>Email</h2>
            <IonCard>
              ``
              <IonInput background-color='White' value=''></IonInput>
            </IonCard>
            <h2>Password</h2>
            <IonCard>
              <IonInput background-color='White' value=''></IonInput>
            </IonCard>

            <IonButton
              routerLink='/Description'
              expand='block'
              size='small'
              color='success'
            >
              Login
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  )
}
export default Login
