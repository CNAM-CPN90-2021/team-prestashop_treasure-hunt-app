import { IonContent } from '@ionic/react';
import './Container.css';

// interface ContainerProps { }

const Container: React.FC = ({children}) => {
  return (
    <IonContent>
      {children}
    </IonContent>

  );
};

export default Container;
