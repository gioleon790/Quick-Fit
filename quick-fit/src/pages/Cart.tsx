import React, { Fragment } from 'react'
import {
  IonCard,
  IonContent,
  IonPage,
  IonSearchbar,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
} from '@ionic/react'
import {
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
                  <img src={print.image} alt="shirt 01"/>
                </IonCol>
                <IonCol className='LCL'>
                  <IonCard className='ion-no-margin'>
                    <IonCardHeader className='LCL'>
                      <IonCardSubtitle>{print.name}</IonCardSubtitle>
                      <IonCard></IonCard>
                      <IonCardSubtitle>${print.price}</IonCardSubtitle>
                      <IonCardSubtitle>{print.size}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonButton
                        // routerLink='BigShirt'
                        routerLink={print.size === "M" ? "/ThreeDee" : "/BigShirt"}
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
            </Fragment>
          ))}
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
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
export default Cart
