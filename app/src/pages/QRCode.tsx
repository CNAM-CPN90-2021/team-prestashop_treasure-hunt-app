import "./QRCode.css"
import { IonButton, useIonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { useQRCodeScanner } from "../hooks/useQRCodeScanner";

// this component just for testing QRcode Functionality 

function QRCode() {
  const { startScan  , stopScan} = useQRCodeScanner();
  const [showToast] = useIonToast();
  const[isActive , setIsActive] = useState<boolean>(false)
  // useEffect(() => {
  //   setIsActive(active)
  // }, [active])
  console.log(isActive)
  return (
    <>
      <IonButton className={isActive ? "hidden" : "visible"}
        onClick={async () => {
          setIsActive(true)
          const result = await startScan();
          console.log(result);
          if (result.content === "good_answer") {
            showToast("Bravo, bonne réponse", 2000)
          } else if (result.content === "wrong_answer") {
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
        Stop scanner
      </IonButton>

      </>
  );
}

export default QRCode