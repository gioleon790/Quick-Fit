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
  trashOutline,
  accessibilityOutline,
} from 'ionicons/icons'
import Cartt from '../CartSource/Cartt'

const Cart: React.FC<{
  passDownTo?: Cartt[] | undefined
  removeIteem: (uniqueId: string | undefined) => void
}> = (props) => {
  const removeItem = (uniqueId: string | undefined) => {
    props.removeIteem(uniqueId)
  }

  return (
    <IonPage className='font'>
      <IonContent className='font'>
        <h1 className='ion-text-center'>Cart</h1>
        <IonSearchbar className='font'></IonSearchbar>

        <IonGrid>
          {props.passDownTo?.map((print: Cartt) => (
            <Fragment key={print.uniqueId}>
              <IonRow>
                <IonCol>
                  <img src='https://i.imgur.com/1anMYfh.png' />
                </IonCol>
                <IonCol className='LCL'>
                  <IonCard className='ion-no-margin'>
                    <IonCardHeader className='LCL'>
                      <IonCardSubtitle>Mens T Shirt</IonCardSubtitle>
                      <IonCard></IonCard>
                      <IonCardSubtitle>$19.99</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonButton
                        // shape='round'
                        routerLink='Threedee'
                        fill='solid'
                        size='default'
                        color='light'
                      >
                        <IonIcon icon={accessibilityOutline} />
                      </IonButton>

                      <IonButton
                        color='danger'
                        fill='solid'
                        onClick={() => removeItem(print.uniqueId)}
                      >
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                    </IonCardContent>
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
