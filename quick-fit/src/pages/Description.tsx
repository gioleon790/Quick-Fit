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
  IonButtons,
  IonBackButton,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonButton,
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
import UIContext from '../util/Context-API-login'

const Description: React.FC = () => {
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
    <IonPage className='Helloo'>
      <IonContent>
        <IonGrid>
          <IonCard></IonCard> <IonCard></IonCard> <IonCard></IonCard>
          <IonCol></IonCol> <IonCol></IonCol> <IonCol></IonCol>{' '}
          <IonCol></IonCol> <IonCol></IonCol> <IonCol></IonCol>{' '}
          <IonCol></IonCol> <IonCol></IonCol> <IonCol></IonCol>{' '}
          <IonCol></IonCol> <IonCol></IonCol>{' '}
          <img
            src='https://i.imgur.com/3oGxL42.jpg'
            width='150'
            className='Hello'
          />
          <h1 className='ion-text-center'>Size Match </h1>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Height</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Weight</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Age</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='ion-text-center'>
              <IonCard></IonCard>
              <IonCard></IonCard>
              <IonCard></IonCard>
              <IonCard></IonCard>
              <IonCard></IonCard>
              <IonCard></IonCard>
              <IonButton
                routerLink='/ModelChoose'
                expand='block'
                size='small'
                color='warning'
              >
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Description
