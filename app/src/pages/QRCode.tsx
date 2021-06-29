import { IonButton, useIonToast } from "@ionic/react";
import { useQRCodeScanner } from "../hooks/useQRCodeScanner";

// this component just for testing QRcode Functionality 

function QRCode() {
  const { startScan } = useQRCodeScanner();
  const [showToast] = useIonToast();

  return (
      <IonButton
        onClick={async () => {
          const result = await startScan();

          console.log(result);
          if (result.content === "good_answer") {
            showToast("Bravo, bonne réponse", 2000)
          } else if (result.content === "wrong_answer") {
            showToast("Non, mauvaise réponse", 2000);
          } else {
            showToast("Code non reconnu", 2000);
          }

        }}
      >
        Scanner le cuillère-code
      </IonButton>
  );
}

export default QRCode