import React, { useState } from "react";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { syncOutline } from "ionicons/icons";

const Threedee: React.FC = () => {
  const [rotateModel, setRotateModel] = useState<string>(
    "https://i.imgur.com/xgEY2wO.png"
  );
  const [count, setCount] = useState<number>(0);

  const modelViewArray = [
    "https://i.imgur.com/xgEY2wO.png",
    "https://i.imgur.com/2uaCPJ8.png",
    "https://i.imgur.com/92FJrHK.png",
    "https://i.imgur.com/6bV979U.png",
  ];

  const onRotateHandler = () => {
    setRotateModel(modelViewArray[count]);

    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton />
              </IonButtons>
              <IonTitle className="ion-text-center"> Your Model</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <IonCard></IonCard>
            <img src={rotateModel} alt="Testing" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton onClick={onRotateHandler} shape="round" color="medium">
              <IonIcon icon={syncOutline} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Threedee;
