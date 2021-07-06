import { IonCol, IonFooter, IonGrid, IonRow, IonToolbar } from "@ionic/react"
import CustomButton from "./CustomButton"


interface pagesFooter {
    hrefButton: string;
    textButton: string;
    disabledButton?: boolean;
}

const PagesFooter: React.FC<pagesFooter> = ({ hrefButton, textButton, disabledButton }) => {
    return (
        <IonFooter>
            <IonToolbar>
                <IonGrid className="container_flex_center">
                    <IonRow>
                        <IonCol>
                            {/* component CustomButton src : component/CustomButton.tsx */}

                            {textButton !== "" && hrefButton !== "" ?
                                <CustomButton buttonHref={hrefButton} buttonText={textButton} disabled={disabledButton ? disabledButton : false}/>
                                : null
                            }

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonFooter>
    )
}

export default PagesFooter