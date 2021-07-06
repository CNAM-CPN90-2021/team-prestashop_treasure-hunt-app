import "./QRCode.css"
import { IonButton, IonCol, IonRow, IonToolbar, useIonToast } from "@ionic/react";
import { useState } from "react";
import { useQRCodeScanner } from "../hooks/useQRCodeScanner";
import CustomButton from "../components/CustomButton";

// this component just for testing QRcode Functionality 

function QRCode() {
  const { startScan  , stopScan} = useQRCodeScanner();
  const [showToast] = useIonToast();
  const[isActive , setIsActive] = useState<boolean>(false)
  const[resultat , setResultat] = useState<boolean>(false)
  console.log(isActive)
  return (
    <>
    <IonToolbar className={resultat ?  "footer hidden" :"footer visible" }>
      <IonButton className={isActive ? "hidden" : "visible"}
        onClick={async () => {
          setIsActive(true)
          const result = await startScan();
          console.log(result);
          if (result.content === "good") {
            showToast("Bravo, bonne réponse", 2000)
            setResultat(true)
          } else if (result.content === "bad") {
            showToast("Non, mauvaise réponse", 2000);
          } else {
            showToast("Code non reconnu", 2000);
          }
          setIsActive(false)
        }}
      >
        Scanner le cuillère-code
      </IonButton>

    <IonButton className={isActive ? "visible" : "hidden" }
        onClick={ () => {
          setIsActive(false)
          stopScan();
          console.log("stooped");
        }}
      >
      Arrêter le scan
    </IonButton>
      

    </IonToolbar>

    <IonToolbar  className={resultat ? "visible footer " : "hidden footer"} >
               <CustomButton  ButtonHref="/scenarios" ButtonText = "Commencer un autre scenario" />
    </IonToolbar>
    {/* </PagesFooter> */}

      </>
  );
}

export default QRCode