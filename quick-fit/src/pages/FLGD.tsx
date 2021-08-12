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
  trashOutline,
  accessibilityOutline,
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
const { v4: uuidv4 } = require('uuid')

const FLGD: React.FC<{ passUpApp: (obj: Cartt) => void }> = (props) => {
  const addCart = (id: string) => {
    let FLGD = FLGDclothing.filter((a) => a.id === id)[0]

    let object = {
      uniqueId: uuidv4().toString(),
      shirtId: FLGD.id,

      image: FLGD.image,

      name: FLGD.name,

      price: FLGD.price,

      size: selectedSize,

      slum: setSize,
    }

    props.passUpApp(object)
  }

  const notPerfect = (event: any) => {
    setSelectedSize(event.target.value)
  }
  const yesNo = (event: any) => {
    setSetSize(event.target.value)
  }
  const [selectedSize, setSelectedSize] = useState<string>()
  const [setSize, setSetSize] = useState<string>()
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
              <img src='https://i.imgur.com/1anMYfh.png' />
            </IonCol>
            {/*IonRow for shirt img*/}

            <IonCol className='card'>
              <IonCard className='ion-no-margin'>
                <IonCardHeader className='card'>
                  <IonCardSubtitle>Mens T Shirt</IonCardSubtitle>
                  <IonCardSubtitle>$19.99</IonCardSubtitle>

                  <IonCardContent>
                    <IonCol>
                      <select value={selectedSize} onChange={notPerfect}>
                        <option value='S'>S</option>,
                        <option value='M'>M</option>,
                        <option value='L'>L</option>,
                      </select>
                    </IonCol>
                  </IonCardContent>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton
                    // shape='round'

                    color='light'
                    fill='solid'
                    routerLink='Threedee'
                  >
                    <IonIcon icon={accessibilityOutline} />
                  </IonButton>

                  <IonButton
                    color='success'
                    onClick={() => addCart('001')}
                    fill='solid'
                    size='default'
                  >
                    <IonIcon icon={cartOutline} />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/*IonRow for shirt img*/}
          </IonRow>

          <IonRow>
            <IonCol>
              <img src='https://i.imgur.com/jxhLh1W.png' />
            </IonCol>
            {/*IonRow for shirt img*/}

            <IonCol className='card'>
              <IonCard className='ion-no-margin'>
                <IonCardHeader className='card'>
                  <IonCardSubtitle>Mens T Shirt</IonCardSubtitle>
                  <IonCardSubtitle>$19.99</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton
                    // shape='round'

                    color='light'
                    fill='solid'
                    routerLink='Threedee'
                  >
                    <IonIcon icon={accessibilityOutline} />
                  </IonButton>

                  <IonButton
                    color='success'
                    onClick={() => addCart('001')}
                    fill='solid'
                    size='default'
                  >
                    <IonIcon icon={cartOutline} />
                  </IonButton>
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
