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
} from 'ionicons/icons'

const Checkout: React.FC = () => {
  const [alert, setAlert] = useState<boolean>()
  const onSubmitHandler = () => {
    setAlert(true)
  }
  return (
    <Fragment>
      <IonAlert
        isOpen={alert!}
        message='Confirmation Email has been sent'
        buttons={[{ text: 'Ok', handler: () => setAlert(false) }]}
      />
      <IonPage>
        <IonContent>
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src='https://i.imgur.com/YItDaWu.png'
                  height='120'
                  width='120 '
                />
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>Mens T Shirt</IonCardContent>
                <IonCardContent>$19.99</IonCardContent>
                <IonCardContent>
                  <IonButton
                    fill='outline'
                    size='default'
                    routerLink='Threedee'
                  >
                    <IonIcon icon={cameraOutline} />
                  </IonButton>
                </IonCardContent>
                <IonCardContent>
                  <IonButton fill='outline' size='default' color='danger'>
                    {' '}
                    <IonIcon icon={trashOutline} />{' '}
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='ion-text-center'>
              <IonButton color='success' onClick={onSubmitHandler}>
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
