import React from 'react'
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

const Modelbody: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <img src='https://i.imgur.com/8mNJYMO.png' width='378' height='812' />
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default Modelbody
