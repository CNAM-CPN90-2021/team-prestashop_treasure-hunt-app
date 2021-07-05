import { useState, useEffect } from "react";

export const useSimulatedPosition = () => {
  const from = { latitude: 47.7426476, longitude: 7.3407563 };
  const to = { latitude: 47.7386289, longitude: 7.3293385 };
  const speed = 0.02; // from 0 to 1
  const refresh = 50; // ms

  const [currentPosition, setPosition] = useState(from);

  useEffect(
    () => {
      const intervalID = setInterval(() => {
        setPosition((pos) => ({
          latitude: pos.latitude + (to.latitude - pos.latitude) * speed, // formule "lerp"
          longitude: pos.longitude + (to.longitude - pos.longitude) * speed,
        }));
      }, refresh);

      return function onUnmount() {
        clearInterval(intervalID);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setPosition]
  );

  return currentPosition;
}