import React, { useState, useContext, useEffect, Fragment } from 'react'
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
  IonItem,
  IonList,
  IonItemDivider,
  IonInput,
  IonButton,
  IonAlert,
} from '@ionic/react'
import BrandComponent from '../components/BrandComponent'
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
  arrowBackOutline,
} from 'ionicons/icons'
import './Checkout.css'

const Checkout: React.FC = () => {
  const [alert, setAlert] = useState<boolean>()
  const onSubmitHandler = () => {
    setAlert(true)
  }
  return (
    <Fragment>
      <IonAlert
        isOpen={alert!}
        message='Confirmation Email Has Been Sent'
        buttons={[{ text: 'Ok', handler: () => setAlert(false) }]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className='LCL'>
          <h1 className='ion-text-left'>Checkout</h1>
          <h6>1 Item</h6>
          <div id='Hello'>
            {/* <h6 id='Fi'>___________________________________</h6> */}
          </div>
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

                    fill='solid'
                    size='default'
                    color='light'
                  >
                    <IonIcon icon={accessibilityOutline} />
                  </IonButton>

                  <IonButton color='danger' fill='solid'>
                    <IonIcon icon={trashOutline} />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <h6>___________________________________</h6>
          <IonRow>
            <IonCol>
              <h6>Subtotal</h6>
            </IonCol>
            <IonCol>
              <h6 className='ion-text-right'>$19.99</h6>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h6>Tax</h6>
            </IonCol>
            <IonCol>
              <h6 className='ion-text-right'>$1.29</h6>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4>Total</h4>
            </IonCol>
            <IonCol>
              <h4 className='ion-text-right'>$21.28</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='ion-text-center'>
              <IonButton
                color='success'
                shape='round'
                onClick={onSubmitHandler}
              >
                Send Link
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    </Fragment>
  )
}
export default Checkout
