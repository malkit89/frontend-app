import { CiclaturaService } from '@/resource';

const ciclaturaModule = {
  namespaced: true,
  state: {
    dati: []
  },
  mutations: {
    SET_DATI(state, dati) {
      state.dati = dati;
    }
  },
  actions: {
    async loadDati({ commit, state }, data) {
      let result = await CiclaturaService.getDatiCiclatura();
      let parsedData = parseDatiServer(result);
      commit('SET_DATI', parsedData);
    }
  },
  getters: {
    getDati(state) {
      return state.dati;
    },
    getL180(state) {
      return state.dati['L180'];
    },
    getL232(state) {
      return state.dati['L232'];
    },
    getL2020(state) {
      return state.dati['L2020'];
    }
  }
};

function parseDatiServer(dati) {
  let result = {};
  //ogni chiave corrisponde al nome della macchina, L180,L232 ecc
  //Il valore della chiave è array con oggetti stallo
  for (const [key, stalli] of Object.entries(dati)) {
    result[key] = []; //inizializzo array per stalli macchina
    stalli.forEach(stallo => {
      result[key].push(parseStallo(stallo));
    });
  }
  return result;
}

/**
 * Converto ogetto ricevuto dal server in ogetto stallo da usare in gui
 * @param {*} stallo : ricevuto da server
 * {
 * "Macchina":"L180",
 * "Stallo":"1",
 * "Tecnico":"Max",
 * "Prova":"20-0463",
 * "Start":"17/08/2020 07:50",
 * "End":"17/08/2020 07:50",
 * "Stato":"In progress",
 * "Export time":"17/08/2020 07:50"
 * }
 */
function parseStallo(stallo) {
  return {
    macchina: stallo.Macchina,
    nome: 'Stallo ' + stallo.Stallo,
    tecnico: stallo.Tecnico,
    prova: stallo.Prova,
    stato: stallo.Stato,
    start: stallo.Start,
    end: stallo.End,
    timestamp: stallo['Export time']
  };
}

export default ciclaturaModule;