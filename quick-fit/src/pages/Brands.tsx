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
} from 'ionicons/icons'
import './Brands.css'

const Brands: React.FC = () => {
  return (
    <IonPage className='fontt'>
      <IonContent>
        <h1 className='ion-text-center' id='fon'>
          Brands
        </h1>
        <IonCard color='red'>
          <img src='https://i.imgur.com/XhW77Wh.png' />
        </IonCard>
        <IonSearchbar></IonSearchbar>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard routerLink='FLGD' className='card-color'>
                <IonCardHeader>
                  <img
                    src='https://i.imgur.com/p9SzFIJ.jpg'
                    alt='FLGD logo'
                    width='120'
                    height='120'
                  />

                  <IonCardSubtitle>FLGD</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                <IonCardHeader className='card-color'>
                  <img
                    src='https://cdn.shopify.com/s/files/1/0856/3676/t/6/assets/about_2_col_1.jpg?v=6557179943947728605'
                    alt='nike logo'
                    width='120'
                    height='120'
                  />
                  <IonCardSubtitle>ISLAND</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className='card-color ' routerLink='Aeonarmor'>
                <IonCardHeader>
                  <img
                    src='https://i.imgur.com/lLnzYh7.jpg'
                    alt='nike logo'
                    width='120'
                    height='120'
                  />
                  <IonCardSubtitle>AEON ARMOR</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-color'>
                <IonCardHeader>
                  <img
                    src='https://sportscenter242.com/app/uploads/2020/05/Champion-Logo.png'
                    alt='nike logo'
                    width='120'
                    height='120'
                  />
                  <IonCardSubtitle>CHAMPION</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className='card-color'>
                <IonCardHeader>
                  <img
                    src='https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1974-1976.png'
                    alt='nike logo'
                    width='120'
                    height='120'
                  />
                  <IonCardSubtitle>PUMA</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-color'>
                <IonCardHeader>
                  <img
                    src='https://logos-world.net/wp-content/uploads/2020/04/Supreme-Logo.png'
                    alt='nike logo'
                    width='120'
                    height='120'
                  />
                  <IonCardSubtitle>SUPREME</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Brands
