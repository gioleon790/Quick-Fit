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
            src='https://i.imgur.com/axid879.jpg'
            width='128'
            className='Hello'
          />
          <h1 className='ion-text-center'>Size Match </h1>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>Height:</IonCardContent>{' '}
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard></IonCard>
              <IonCard>
                <IonInput background-color='White' value=''></IonInput>
              </IonCard>
              <IonCard></IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>Weight:</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonInput background-color='White' value=''></IonInput>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>Age:</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonInput background-color='White' value=''></IonInput>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                routerLink='/ModelChoose'
                expand='block'
                size='small'
                color='success'
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
