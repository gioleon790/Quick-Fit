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
    image: 'https://i.imgur.com/1anMYfh.png',
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
      {/*Top Page */}
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
        {/*Top Page */}
        <IonGrid>
          {/*shirt img*/}
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src='https://i.imgur.com/1anMYfh.png'
                  width='120'
                  height='120'
                />
              </IonCard>
            </IonCol>
            {/*IonRow for shirt img*/}
            <IonCol>
              <IonCard>
                <IonCardHeader>Mens T Shirt</IonCardHeader>
                <IonCardHeader>$19.99</IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonButton
                        shape='round'
                        color='success'
                        onClick={() => addCart('001')}
                        fill='solid'
                        size='default'
                      >
                        <IonIcon icon={cartOutline} color='medium' />
                      </IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton
                        fill='outline'
                        size='default'
                        routerLink='Threedee'
                      >
                        <IonIcon icon={cameraOutline} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/*IonRow for shirt img*/}
          </IonRow>
          {/*IonRow for shirt img*/}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default FLGD
