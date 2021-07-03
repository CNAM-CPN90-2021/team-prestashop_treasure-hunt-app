import { IonPage } from "@ionic/react"
import { RouteComponentProps } from "react-router"
import BriqueImageItem from "../components/briquesComponent/BriqueImageItem"
import BriqueTexteItem from "../components/briquesComponent/BriqueTexteItem"
import Container from "../components/Container"
import PagesFooter from "../components/PagesFooter"
import PagesHeader from "../components/PagesHeader"
import { useScenarios } from "../hooks/useScenarios"
import { Etape } from "../interfaces/Etape"
import { Scenario } from "../interfaces/Scenario"

const StepsView: React.FC = () => {

    return (

        <IonPage>
            <PagesHeader hrefBackButton="/" pageTitle="Etape précédente" />

            <BriqueImageItem brique={{
                id: 2,
                titre: "photo principale",
                description: "Decription brique 2",
                type: "IMAGE",
                urlImage: "https://www.18h39.fr/wp-content/uploads/2019/04/chat-trop-chou-600x420.jpg",
                texteAccessibilite: "Descritpion de l'image"
            }}>
            </BriqueImageItem>
            <BriqueTexteItem brique={{
                id: 1,
                titre: "Titre de l'histoir",
                description: "Decription brique 1",
                type: "TEXTE",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum, temporibus libero delectus facere doloremque iure velit porro blanditiis nobis a, iste quod error dolor illum tempore est. Molestias, dolor."
            }}>
            </BriqueTexteItem>

            <PagesFooter hrefButton="/maps" textButton="Accédez à la carte" />

        </IonPage>
    )
}

export default StepsView