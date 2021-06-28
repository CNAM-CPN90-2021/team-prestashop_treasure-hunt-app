import { IonPage } from "@ionic/react"
import Container from "../components/Container"
import PagesFooter from "../components/PagesFooter"
import PagesHeader from "../components/PagesHeader"

const StepsView : React.FC= () =>{


    return(
        
        <IonPage>
            <PagesHeader hrefBackButton = "/"  pageTitle="title"  />

            <Container>

            <h1>les briques</h1>

            </Container>

            <PagesFooter  hrefButton ="" textButton=""/>

        </IonPage>
    )
}

export default StepsView