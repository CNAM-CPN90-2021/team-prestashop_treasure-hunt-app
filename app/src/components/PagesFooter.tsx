import { IonCol, IonFooter, IonGrid, IonRow, IonToolbar } from "@ionic/react"
import CustomButton from "./CustomButton"


interface pagesFooter{

    hrefButton : string ;
    textButton : string ;

}

const PagesFooter : React.FC<pagesFooter> = ({hrefButton  , textButton}) => {
    return (
        <IonFooter>
        <IonToolbar>
            <IonGrid className="container_flex_center">
                <IonRow>
                    <IonCol>
                        {/* component CustomButton src : component/CustomButton.tsx */}
                        
                        {textButton !== "" && hrefButton !== "" ?
                        <CustomButton ButtonHref={hrefButton} ButtonText={textButton} />
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