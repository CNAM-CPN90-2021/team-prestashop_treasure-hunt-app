import { useState, useEffect } from "react";
import { Scenario } from "../interfaces/Scenario";

export const useScenarios = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  // ce code s'executera seulement à l'initialisation du composant
  useEffect(() => {
    getAllScenarios();
  }, []);

  /**
   * Récupère tous les scénarios de l'API
   */
  function getAllScenarios() {
    fetch("https://<api-domaine-name>/scenarios")
      .then((response) => response.json())
      .then((data) => setScenarios(data));
  }

  return {
    scenarios,
  };
};
