import { CiclaturaService } from '@/resource';
import CiclaturaConfig from '@/configs/ciclatura.js';

//  Ogni quanti secondi è possibile fare nuova richiesta al server per i dati
const PAUSA_DATI = parseInt(CiclaturaConfig.INTERVALLO_CHECK)

//  Elenco dei possibili stati per gli stalli
export const STATI_STALLI = {
  IN_PROGRESS: 'In progress',
  WAITING: 'Waiting',
  END_OK: 'End ok',
  MANUAL_STOP: 'Manual stop',
  SAFETY_BLOCK: 'Safety block',
  ERROR: 'Error',
  READY: 'Ready',
}

export const TIPI_PRODOTTO = {
  SWITCH: 'Switch',
  SOCKET: 'Socket'
}

let lastUpdate;
export const CiclaturaModule = {
  namespaced: true,
  state: {
    dati: []
  },
  mutations: {
    SET_DATI(state, dati) {
      state.dati = dati;
      lastUpdate = new Date();
    }
  },
  actions: {
    async loadDati({ commit, state }, data) {
      // Verifico se è intercorso il tempo stabilito dalla ultima richiesta
      // Questo evita la chiamata al server quando viene caricata la apgina dei stalli, dopo il tasto back nella schermata detail stallo
      if (checkTempo()) {
        let result = await CiclaturaService.getDatiCiclatura();
        let parsedData = parseDatiServer(result);
        commit('SET_DATI', parsedData);
      } else {
        // console.log('Dati da cache');
        return;
      }
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

/**
 * Indica se è trascorso il tempo per eseguire una nuova richiesta dati
 */
function checkTempo() {
  //  primo avvio
  if (lastUpdate == undefined) return true;

  // minore di secondi di pausa
  let diff = new Date() - lastUpdate;
  //  Aggiungo la tolleranza di 500ms sul tempo. Il tempo di loop interval è sempre minore di qualche ms rispetto alla pausa impostata
  if (diff < (PAUSA_DATI - 500)) return false;

  // maggiore di tempo di pausa
  return true;
}

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
    nome: ' ' + stallo.Stallo,
    tecnico: stallo.Tecnico,
    prova: stallo.Prova,
    stato: getIdStato(stallo.Stato),
    start: stallo.Start,
    end: stallo.End,
    timestamp: stallo['Export time'],
    tipo: getTipoStallo(stallo.Macchina, stallo.Stallo)
  };
}

//  Resituisce la costante stato stallo in base al valore di testo indicato
function getIdStato(stato) {
  let result = '';
  switch (stato) {
    case 'In progress':
      result = STATI_STALLI.IN_PROGRESS
      break;
    case 'Waiting':
      result = STATI_STALLI.WAITING
      break;
    case 'End ok':
      result = STATI_STALLI.END_OK
      break;
    case 'Error':
      result = STATI_STALLI.ERROR
      break;
    case 'Manual stop':
      result = STATI_STALLI.MANUAL_STOP
      break;
    case 'Ready':
      result = STATI_STALLI.READY
      break;
    case 'Safety block':
      result = STATI_STALLI.SAFETY_BLOCK
      break;
  }
  return result;
}

//  Restituisce il tipo di stallo in base alla macchina e nome stallo
function getTipoStallo(macchina, stallo) {
  let result;
  switch (macchina.toUpperCase()) {
    case 'L2020':
      result = TIPI_PRODOTTO.SWITCH;
      break;
    case 'L2021':
      result = TIPI_PRODOTTO.SOCKET;
      break;
    case 'L180':
      result = ['1', '2', '3', '4'].includes(stallo) ? TIPI_PRODOTTO.SOCKET : TIPI_PRODOTTO.SWITCH;
      break;
    case 'L232':
      result = ['3', '4'].includes(stallo) ? TIPI_PRODOTTO.SOCKET : TIPI_PRODOTTO.SWITCH;
      break;
  }
  return result;
}