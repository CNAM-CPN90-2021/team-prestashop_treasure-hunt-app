import { IonButton } from "@ionic/react"

interface customButtonInterface {
    buttonHref: string;
    buttonText: string;
    disabled?: boolean;
}

const CustomButton: React.FC<customButtonInterface> = ({ buttonHref, buttonText, disabled }) => {
    return (

        <IonButton size="default" color="success" fill="solid" href={buttonHref} disabled={disabled}>
            {buttonText}
        </IonButton>

    )
}

export default CustomButton