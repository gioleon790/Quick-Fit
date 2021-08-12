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
  caretBackOutline,
  caretForwardOutline,
} from 'ionicons/icons'
import UIContext from '../util/Context-API-login'
import './ModelChoose.css'
const ModelChoose: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext)
  const [text, setText] = useState<string>()
  const [number, setNumber] = useState<number>()
  const [switchModel, setSwitchModel] = useState<string>(
    'https://i.imgur.com/XhW77Wh.png'
  )
  const [count, setCount] = useState<number>(0)

  const modelViewArray = [
    'https://i.imgur.com/XhW77Wh.png',
    'https://files.slack.com/files-pri/T17R4TFAM-F02AY7V54LT/image_from_ios.png',
  ]

  const goRight = () => {
    setSwitchModel(modelViewArray[count])

    if (count === 0) {
      setCount(1)
    } else {
      setCount(count + 0)
    }
  }

  const goLeft = () => {
    setSwitchModel(modelViewArray[count])

    if (count === 1) {
      setCount(0)
    } else {
      setCount(count - 0)
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Model</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard></IonCard>
      <IonCard></IonCard>
      <IonRow className='ion-text-center'>
        <IonCol size='2' className='vertical-button ion-text-center'>
          <IonButton color='light'>
            {' '}
            <IonIcon icon={caretBackOutline} />{' '}
          </IonButton>
        </IonCol>
        <IonCol size='8'>
          <img src={switchModel} height='300' />
          <IonCard></IonCard>
        </IonCol>

        <IonCol size='2' className='vertical-button ion-text-center'>
          <IonButton color='light'>
            <IonIcon icon={caretForwardOutline} />
          </IonButton>
        </IonCol>
      </IonRow>
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
