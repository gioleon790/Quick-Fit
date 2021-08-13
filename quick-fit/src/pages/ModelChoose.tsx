import React, { useState, useEffect } from 'react'
import {
  IonCard,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonIcon,
  IonButton
} from '@ionic/react'
import {
  caretBackOutline,
  caretForwardOutline,
} from 'ionicons/icons'
import UIContext from '../util/Context-API-login'
import './ModelChoose.css'
const ModelChoose: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext)
  // const [text, setText] = useState<string>()
  // const [number, setNumber] = useState<number>()
  const [switchModel, setSwitchModel] = useState<string>(
    'https://i.imgur.com/XhW77Wh.png'
  )
  const [count, setCount] = useState<number>(0)

  const modelViewArray = [
    'https://i.imgur.com/XhW77Wh.png',
    'https://i.imgur.com/fXs9216.png',
  ]

  const goRight = () => {
    setSwitchModel(modelViewArray[count])

    if (count === 1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  const goLeft = () => {
    setSwitchModel(modelViewArray[count])


    if (count === 1) {
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
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center"> Choose Your Model</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard></IonCard>
      <IonRow className='ion-text-center'>
        <IonCol size='2' className='vertical-button ion-text-center'>
          <IonButton onClick={goLeft} color='light'>
            {' '}
            <IonIcon icon={caretBackOutline} />{' '}
          </IonButton>
        </IonCol>
        <IonCol size='8'>
          <img src={switchModel} height='350' alt="model switching"/>
          <IonCard></IonCard>
        </IonCol>

        <IonCol size='2' className='vertical-button ion-text-center'>
          <IonButton onClick={goRight} color='light'>
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
