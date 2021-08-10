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
const ModelChoose: React.FC = () => {
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
    <IonPage className='k'>
      <IonCard></IonCard>
      <IonCard></IonCard>
      <img src='https://i.imgur.com/XhW77Wh.png' />
      <IonCard></IonCard>
      <IonCol className='ion-text-center'>
        <IonButton
          fill='outline'
          color='warning'
          href='brands'
          className='ion-text-center'
        >
          Confirm
        </IonButton>{' '}
        <IonCard></IonCard>
        <IonButton fill='outline' color='warning' href='Description'>
          Cancel
        </IonButton>
      </IonCol>
    </IonPage>
  )
}

export default ModelChoose
