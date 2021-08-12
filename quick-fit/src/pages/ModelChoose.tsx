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
  syncOutline,
  swapHorizontalOutline,
} from 'ionicons/icons'
import UIContext from '../util/Context-API-login'
import './ModelChoose.css'
const ModelChoose: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext)
  const [text, setText] = useState<string>()
  const [number, setNumber] = useState<number>()
  const [rotateModel, setRotateModel] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  const modelViewArray = [
    'https://i.imgur.com/xgEY2wO.png',
    'https://i.imgur.com/2uaCPJ8.png',
    'https://i.imgur.com/92FJrHK.png',
    'https://i.imgur.com/6bV979U.png',
  ]

  const onRotateHandler = () => {
    setRotateModel(modelViewArray[count])

    if (count === 3) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

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
      <IonRow>
        <IonCol className='ion-text-center'></IonCol>
      </IonRow>
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
