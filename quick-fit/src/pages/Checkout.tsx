import React, { useState, Fragment } from "react";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonRow,
  IonCol,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonButton,
  IonAlert,
  IonGrid,
} from "@ionic/react";
import "./Checkout.css";
import ColoredLine from "../components/Lines";
import Cartt from "../CartSource/Cartt";

const Checkout: React.FC<{ passDownTo?: Cartt[] | undefined }> = (props) => {
  const [alert, setAlert] = useState<boolean>();
  const onSubmitHandler = () => {
    setAlert(true);
  };
  return (
    <Fragment>
      <IonAlert
        isOpen={alert!}
        message="Confirmation Email Has Been Sent"
        buttons={[{ text: "Ok", handler: () => setAlert(false) }]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="LCL">
          <h1 className="ion-text-left">Checkout</h1>
          <h6>{props.passDownTo?.length} Item(s)</h6>
          <div id="Hello">
            <ColoredLine color="black" />
            {/* <h6 id='Fi'>___________________________________</h6> */}
          </div>
          <IonGrid>
            {props.passDownTo?.map((print: Cartt) => (
              <Fragment key={print.uniqueId}>
                <IonRow>
                  <IonCol>
                    <img src={print.image} alt="shirt 01" />
                  </IonCol>
                  <IonCol className="LCL">
                    <IonCard className="ion-no-margin">
                      <IonCardHeader className="LCL">
                        <IonCardSubtitle>{print.name}</IonCardSubtitle>
                        <IonCard></IonCard>
                        <IonCardSubtitle>${print.price}</IonCardSubtitle>
                        <IonCard></IonCard>
                        <IonCardSubtitle>{print.size}</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent></IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </Fragment>
            ))}

            <ColoredLine color="black" />
            {/* <h6>___________________________________</h6> */}
            <IonRow>
              <IonCol>
                <h6>Subtotal</h6>
              </IonCol>
              <IonCol>
                <h6 className="ion-text-right">
                  $
                  {props.passDownTo?.reduce(
                    (a, v) => (a = a + Number(v.price)),
                    0
                  ).toFixed(2)}
                </h6>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h6>Tax</h6>
              </IonCol>
              <IonCol>
                <h6 className="ion-text-right">$1.29</h6>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h4>Total</h4>
              </IonCol>
              <IonCol>
                <h4 className="ion-text-right">
                  $
                  {props.passDownTo!.reduce(
                    (a, v) => (a = a + Number(v.price)),
                    0
                  ) + Number(1.95).toFixed(2)}
                </h4>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton
                  color="success"
                  shape="round"
                  onClick={onSubmitHandler}
                >
                  Send Link
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </Fragment>
  );
};
export default Checkout;
