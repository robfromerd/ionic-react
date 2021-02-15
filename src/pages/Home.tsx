import React from 'react';
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
     <Ion-toolbar>
        <Ion-buttons slot="start">
          <Ion-menu-button auto-hide="false"></Ion-menu-button>
        </Ion-buttons>
        <Ion-buttons slot="primary">
          <Ion-button>
            <Ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></Ion-icon>
          </Ion-button>
        </Ion-buttons>

        <Ion-title>Standard</Ion-title>
      </Ion-toolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
