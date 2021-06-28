import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react"

interface pagesHeader{
    hrefBackButton : string;
    pageTitle : string;
}

const PagesHeader : React.FC<pagesHeader> = ({hrefBackButton , pageTitle}) => {
    return(
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref={hrefBackButton} />
            </IonButtons>
            <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
    </IonHeader>
    )
}

export default PagesHeader