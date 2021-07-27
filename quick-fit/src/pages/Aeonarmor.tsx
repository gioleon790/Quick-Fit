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
import Cartt from './Cart'
const Aeonarmorclothes = [
  {
    id: '01',
    image: 'https://i.imgur.com/uFqecWs.jpg',
    name: 'Gray Shirt',
    price: '19.99',
  },

  {
    id: '02',
    image: 'https://i.imgur.com/6flQL5u.jpg',
    name: 'Blue Shirt',
    price: '$18.95',
  },
]
const AeonArmor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1 className='ion-text-center'>A E O N A R M O R</h1>
        <IonSearchbar></IonSearchbar>
        <IonRow>
          <IonCol>
            <IonCard>
              <img
                src='https://i.imgur.com/6flQL5u.jpg'
                height='150'
                width='150'
              />
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardContent>Mens T Shirt</IonCardContent>
              <IonCardContent>$19.99</IonCardContent>
              <IonCardContent>
                <IonTabBar>
                  <IonTabButton tab='Cart'>
                    <IonIcon icon={cartOutline} />
                  </IonTabButton>
                  <IonLabel>Cart</IonLabel>
                </IonTabBar>
              </IonCardContent>
              <IonCardContent>
                <IonTabButton tab='Model'>
                  <IonIcon icon={cameraOutline} />
                  <IonLabel>Model</IonLabel>
                </IonTabButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <img
                src='https://i.imgur.com/uFqecWs.jpg'
                width='160'
                height='160'
              />
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>Mens T Shirt</IonCardHeader>
              <IonCardHeader>$19.99</IonCardHeader>
              <IonCardContent>
                <IonTabBar>
                  <IonTabButton tab='Cart'>
                    <IonIcon icon={cartOutline} />
                  </IonTabButton>
                  <IonLabel>Cart</IonLabel>
                </IonTabBar>
              </IonCardContent>
              <IonCardContent>
                <IonTabButton tab='Model'>
                  <IonIcon icon={cameraOutline} />
                  <IonLabel>Model</IonLabel>
                </IonTabButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}
export default AeonArmor
