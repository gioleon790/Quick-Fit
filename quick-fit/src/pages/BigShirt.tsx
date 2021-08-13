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
  syncOutline,
} from 'ionicons/icons'

const BigShirt: React.FC = () => {
  const [rotateModel, setRotateModel] = useState<string>(
    'https://i.imgur.com/KzmSZO4.png'
  )
  const [count, setCount] = useState<number>(0)

  const modelViewArray = [
    'https://i.imgur.com/KzmSZO4.png',
    'https://i.imgur.com/HKtL6vV.png',
    'https://i.imgur.com/XCoo0xk.png',
    'https://i.imgur.com/a8RAYCQ.png',
  ]

  const onRotateHandler = () => {
    setRotateModel(modelViewArray[count])

    if (count === 3) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle> Your Model</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <img src={rotateModel} alt='Testing' />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='ion-text-center'>
            <IonButton onClick={onRotateHandler} shape='round' color='medium'>
              <IonIcon icon={syncOutline} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default BigShirt
