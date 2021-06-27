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
    fetch("http://localhost:8080/scenarioListJson")
      .then((response) => {
        return response.json();
      })
      .then((data) => setScenarios(data));
    // Récupération provisoire de données en dur
    // console.log(data)
    // setScenarios(data);
  }

  /**
   * Filtre les scénarios pour retourner celui qui correspond à l'id
   * @param id - identifiant unique
   * @returns 
   */
  function filterById(id: number): Scenario {
    console.log("id", id);
    let scenarioById: Scenario = {
      id: 0,
      titre: "default title"
    }
    if (scenarios != null) {
      scenarios.find((scenario) => {
        if (scenario.id === id) {
          scenarioById = scenario;
        }
      });
    }
    return scenarioById;
  }

  return {
    filterById,
    scenarios,
  };
};
