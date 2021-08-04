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
  IonBackButton,
  IonButtons,
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
import Cartt from '../CartSource/Cartt'

const FLGDclothing = [
  {
    id: '001',
    image: 'https://i.imgur.com/N2FUTu5.png',
    name: 'White shirt',
    price: '$19.99',
  },

  {
    id: '002',
    image: 'https://i.imgur.com/iTTnpxx.jpg',
    name: 'Black shirt',
    price: '$20.00',
  },
]

const FLGD: React.FC<{ passUpApp: (obj: Cartt) => void }> = (props) => {
  const addCart = (id: string) => {
    let FLGD = FLGDclothing.filter((a) => a.id === id)[0]
    props.passUpApp(FLGD)
  }

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
        <h1 className='ion-text-center'>F L G D</h1>
        <IonSearchbar></IonSearchbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src='https://i.imgur.com/6yvpeM2.png'
                  alt='nike logo'
                  width='120'
                  height='120'
                />
                ]
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>Mens T Shirt</IonCardHeader>
                <IonCardHeader>$19.99</IonCardHeader>
                <IonCardContent>
                  <IonButton
                    shape='round'
                    color='success'
                    onClick={() => addCart('001')}
                  >
                    <IonIcon icon={cartOutline} color='medium' />
                  </IonButton>
                </IonCardContent>
                <IonCardContent>
                  <IonButton shape='round'>
                    <IonIcon icon={cameraOutline} />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src='https://i.imgur.com/iTTnpxx.jpg'
                  alt='FLGD shirt'
                  width='120'
                  height='120'
                />
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>Mens T Shirt </IonCardHeader>
                <IonCardHeader>$19.99</IonCardHeader>
                <IonCardContent>
                  <IonTabBar>
                    <IonButton onClick={() => addCart('002')}>
                      <IonIcon icon={cartOutline} />
                    </IonButton>
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
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
export default FLGD
