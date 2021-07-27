import { IonCard, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar,IonCardHeader,IonCardContent,IonCardSubtitle,IonCardTitle, IonGrid, IonRow, IonCol,IonTabBar,IonTabButton,IonIcon,IonLabel,IonBadge,IonTabs,IonBackButton,IonButtons} from '@ionic/react';
import BrandComponent from '../components/BrandComponent';
import { calendar, personCircle, map, informationCircle,gridOutline,cartOutline,cameraOutline } from 'ionicons/icons';
import './Brands.css';


const Brands: React.FC = () => {
return (
  <IonPage>
    <IonContent>
      <h1 className="ion-text-center">Brands</h1>
      <IonSearchbar></IonSearchbar>
        
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard routerLink="FLGD">
              <IonCardHeader>
                <img src="https://i.imgur.com/XT1ECg0.jpg" alt="nike logo" width="120" height="120"/>
                <IonCardSubtitle>FLGD</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>  
              </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <img src="https://r1.ilikewallpaper.net/iphone-wallpapers/download-112261/Nike-logo-blue_200.jpg" alt="nike logo" width="120" height="120"/>
                <IonCardSubtitle>Nike</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard routerLink="Aeonarmor">
                <IonCardHeader>
                   <img src="https://i.imgur.com/lLnzYh7.jpg" alt="nike logo" width="120" height="120"/>
                    <IonCardSubtitle>AEON ARMOR</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
             <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <img src="https://sportscenter242.com/app/uploads/2020/05/Champion-Logo.png" alt="nike logo" width="120" height="120"/>
                      <IonCardSubtitle>CHAMPION</IonCardSubtitle>
                    </IonCardHeader>
              </IonCard>
            </IonCol>
            </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardHeader>
                      <img src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1974-1976.png" alt="nike logo" width="120" height="120"/>
                        <IonCardSubtitle>PUMA</IonCardSubtitle>
                          </IonCardHeader>
                            </IonCard>
                              </IonCol>
                                  <IonCol>
                                    <IonCard>                    
                                      <IonCardHeader>
                                          <img src="https://logos-world.net/wp-content/uploads/2020/04/Supreme-Logo.png" alt="nike logo" width="120" height="120"/>
                                              <IonCardSubtitle>SUPREME</IonCardSubtitle>
                                          </IonCardHeader>
                                             </IonCard>
                                               </IonCol>
                                                  </IonRow>
                                               
    
   
 
              

        
        

   
  
              
              
              
              







    


   
      
    
            
            


          


          
  


        </IonGrid>
      </IonContent>
      </IonPage>
     

     
      
  );
};

export default Brands;
