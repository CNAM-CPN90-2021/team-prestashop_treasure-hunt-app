import { useState, useEffect } from "react";
import { Scenario } from "../interfaces/Scenario";
import data from "../datas/dataStructureModule.json";

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
    // TODO: Cette partie devra être décommentée lorsque l'API sera accessible
    // fetch("https://<api-domaine-name>/scenarios")
    //   .then((response) => response.json())
    //   .then((data) => setScenarios(data));
    
    // Récupération provisoire de données en dur
    // console.log(data)
    setScenarios(data);
  }

  return {
    scenarios,
  };
};
