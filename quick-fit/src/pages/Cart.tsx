import React, { Fragment } from 'react'
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

const Cart: React.FC<{ passDownTo: Cartt[] }> = (props) => {
  return (
    <IonPage>
      <IonContent>
        <h1 className='ion-text-center'>Cart</h1>
        <IonSearchbar></IonSearchbar>

        <IonGrid>
          {props.passDownTo.map((print: Cartt) => (
            <Fragment>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <img
                      src={print.image}
                      alt='nike logo'
                      width='120'
                      height='120'
                    />
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>{print.name}</IonCardContent>
                    <IonCardContent>{print.price}</IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className='ion-text-center'>
                  <IonButton
                    href='/Checkout'
                    shape='round'
                    color='success'
                    routerLink='Checkout'
                  >
                    Confirm
                  </IonButton>
                </IonCol>
              </IonRow>
            </Fragment>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
export default Cart
