import { useState, useEffect } from "react";

export const useSimulatedPosition = () => {
  const from = { latitude: 47.7526476, longitude: 7.3407563 };
  const to = { latitude: 47.7395389333945, longitude: 7.329169414309033 };
  const speed = 0.01; // from 0 to 1
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