import React, { useContext, useEffect } from 'react'
import {
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react'
import UIContext from '../util/Context-API-login'
import './Description.css'

const SizeMatch: React.FC = () => {
  const { setShowTabs } = useContext(UIContext)

  useEffect(() => {
    setShowTabs(false)

    return () => {
      setShowTabs(true)
    }
  })

  return (
    <IonPage className='fonttt'>
      <IonContent className='ion-text-center'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <img
                className='ion-text-center'
                src='https://i.imgur.com/3oGxL42.jpg'
                alt='logo'
                width='150'
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='fonttt'>
              <h1 className='ion-text-center'>Size Match</h1>
            </IonCol>
          </IonRow>

          <IonRow className='fonttt'>
            <IonCol className='fonttt'>
              <IonItem className='fonttt'>
                <IonLabel className='fonttt'>Height:</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Weight:</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Age:</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                color='warning'
                fill='outline'
                className='fonttt'
                href='ModelChoose'
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

export default SizeMatch
