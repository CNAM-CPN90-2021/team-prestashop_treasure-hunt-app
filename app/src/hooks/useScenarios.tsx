import { useState, useEffect } from "react";
import { Scenario } from "../interfaces/Scenario";
import data from "../datas/dataStructureModule.json";
import { Etape } from "../interfaces/Etape";
import { Plot } from "../interfaces/Plot";

export const useScenarios = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  // ce code s'executera seulement à l'initialisation du composant
  useEffect(() => {
    getAllScenarios();
  });

  /**
   * Récupère tous les scénarios de l'API
   */
  function getAllScenarios() {
    // fetch("http://localhost:8080/scenarioListJson")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setScenarios(data));

    // Récupération provisoire de données en dur
    setScenarios(data);
  }

  /**
   * Filtre les scénarios pour retourner celui qui correspond à l'id
   * @param id - identifiant unique
   * @returns 
   */
  function filterById(id: number): Scenario {
    let scenarioById: Scenario = {
      id: 0,
      titre: "",
      description: "",
      etapes: []
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

  /**
   * Retourne la première étape d'un scénario
   * @param scenarioId Unique identifier of a scenario
   * @returns 
   */
  function getFirstEtape(scenarioId: number): any {
    let firstStep: Etape = {
      id: 0,
      description: "",
      titre: "",
      status: false,
      plots: []
    };
    if (scenarios != null) {
      scenarios.find((scenario) => {
        if (filterById(scenarioId) && scenario.etapes[0] != null) {
          firstStep = scenario.etapes[0];
        }
      });
    }
    return firstStep;
  }

  /**
   * Retourne le premier plot d'une étape
   * @param scenarioId 
   * @param etapeId 
   * @returns 
   */
  function getFirstPlot(scenarioId: number, etapeId: number): Plot {
    let firstPlot: Plot = {
      id: 0,
      description: "",
      titre: "",
      status: false,
      type: "",
      briques: []
    };
    const scenario = filterById(scenarioId)
    const etape = scenario.etapes.find((etape) => etape.id === etapeId);
    if (filterById(scenarioId) && etape != null && etape.plots[0] != undefined) {
      firstPlot = etape.plots[0]
    }
    return firstPlot;
  }

  return {
    filterById,
    scenarios,
    getFirstEtape,
    getFirstPlot
  };
};
