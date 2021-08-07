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

import UIContext from '../util/Context-API-login'
import './Login.css'

const Login: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext)
  const [text, setText] = useState<string>()
  const [number, setNumber] = useState<number>()

  useEffect(() => {
    setShowTabs(false)

    return () => {
      setShowTabs(true)
    }
  })

  return (
    <IonPage className='font'>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>Sign in</IonCardTitle>
            </IonCardHeader>
            <IonCard>
              <img
                src='https://i.imgur.com/3oGxL42.jpg'
                alt=''
                height='250'
                width='250'
              />
            </IonCard>

            <IonCardHeader className='ion-text-center'>
              New To QuickFit? Sign Up
            </IonCardHeader>

            <IonCard className='cool'>
              <IonItem>
                <IonInput
                  value={text}
                  placeholder='Email'
                  onIonChange={(e) => setText(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCard>
            <IonCard className='cool'>
              <IonItem>
                <IonInput
                  value={text}
                  placeholder='Password'
                  onIonChange={(e) => setText(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCard>

            <IonButton
              routerLink='/Description'
              expand='block'
              size='small'
              className='color'
              color='warning'
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
