import { MessageService } from '../resource';

const messageModule = {
  namespaced: true,
  state: {
    message: 'Msg da store module Message'
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message;
    }
  },
  actions: {
    setMessage({ commit, state }, message) {
      commit('SET_MESSAGE', message);
    },
    sendMessage({ commit, state }, message) {
      MessageService.sendMessage(message);
    }
  },
  getters: {
    getMessage(state) {
      return state.message;
    }
  }
};

export default messageModule;
