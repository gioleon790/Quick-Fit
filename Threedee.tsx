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

const Threedee: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonCard routerLink='/Modelbody'>
              <IonCardContent>
                <img
                  src='https://i.imgur.com/8mNJYMO.png'
                  width='200'
                  height='200'
                />
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardContent>
                <img
                  src='https://i.imgur.com/Mscnkbg.png'
                  width='200'
                  height='200'
                />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}
export default Threedee
