import { useState, useEffect } from "react";
import { useWatchPosition } from "@capacitor-community/react-hooks/geolocation";


export const useRealPosition = () => {
  const { currentPosition, startWatch, clearWatch } = useWatchPosition();
  useEffect(
    function startWatchOnMount() {
      startWatch();

      return function onUnmount() {
        clearWatch();
      };
    },
    [startWatch, clearWatch]
  );
  return currentPosition?.coords;
}
