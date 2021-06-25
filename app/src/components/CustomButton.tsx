import { IonButton } from "@ionic/react"

interface customButtonInterface{
    ButtonHref : string;
    ButtonText : string;
}

const CustomButton : React.FC<customButtonInterface> = ({ButtonHref ,ButtonText})=> {
    return(

    <IonButton size="default"  color="success" fill="solid" href={ButtonHref}>
        {ButtonText}       
    </IonButton>

    )
}

export default CustomButton