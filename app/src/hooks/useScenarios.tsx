import { useState, useEffect } from "react";
import { Scenario } from "../interfaces/Scenario";
import data from "../datas/dataStructureModule.json";
import { Etape } from "../interfaces/Etape";
import { Plot } from "../interfaces/Plot";

/**
 * 
 * L'implémentation de ce hook peut être grandement simplifiée. 
 * Notamment car l'utilisation de la méthode find n'était pas bonne. 
 * Dans votre implémentation, elle n'apportait aucun bénéfice 
 * par rapport à une simple boucle forEach.
 * 
 */

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
    let defaultValue: Scenario = {
      id: 0,
      titre: "",
      description: "",
      etapes: [],
    };

    const scenario = scenarios?.find((scenario) => {
      return scenario.id === id;
    });

    return scenario ?? defaultValue;
  }

  /**
   * Retourne la première étape d'un scénario
   * @param scenarioId Unique identifier of a scenario
   * @returns
   */
  function getFirstEtape(scenarioId: number): Etape {
    const defaultValue = {
      id: 0,
      description: "",
      titre: "",
      status: false,
      plots: [],
    };

    const scenario = filterById(scenarioId);
    return scenario.etapes[0] ?? defaultValue;
  }

  /**
   * Retourne le premier plot d'une étape
   * @param scenarioId
   * @param etapeId
   * @returns
   */
  function getFirstPlot(scenarioId: number, etapeId: number): Plot {
    const scenario = filterById(scenarioId);
    const etape = scenario.etapes.find((etape) => etape.id === etapeId);
    if (etape?.plots?.[0]) {
      return etape?.plots[0];
    }

    return {
      id: 0,
      description: "",
      titre: "",
      status: false,
      type: "",
      briques: [],
    };
  }

  return {
    filterById,
    scenarios,
    getFirstEtape,
    getFirstPlot
  };
};
