import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    participants: [
      { id: 'p-1', name: 'Thierry', email: 'thierry@mail.de' },
      { id: 'p-2', name: 'Markus', email: 'markus@mail.de' },
      { id: 'p-3', name: 'Tom', email: 'tom@mail.de' }
    ],

    exceptions: []
  },

  getters: {
    participantById: state => id => state.participants.find(p => p.id === id),
    exceptionById: state => id => state.exceptions.find(e => e.id === id)
  },

  mutations
})
