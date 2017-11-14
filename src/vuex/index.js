import Vue from 'vue'
import Vuex from 'vuex'
import uniqueId from 'lodash.uniqueid'
import reject from 'lodash.reject'

import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    participants: [],
    exceptions: []
  },

  getters: {
    participantById: state => id => state.participants.find(p => p.id === id),
    exceptionById: state => id => state.exceptions.find(e => e.id === id),
    hasParticipants: state => state.participants.length > 0,
    validParticipants: state => reject(state.participants, p => {
      return p.name === '' || p.email === ''
    })
  },

  mutations
})

// add some participants on dev
if (process.env.NODE_ENV === 'development') {
  store.state.participants.push({ id: uniqueId('p'), name: 'Thierry', email: 'thierry@mail.de' })
  store.state.participants.push({ id: uniqueId('p'), name: 'Markus', email: 'markus@mail.de' })
  store.state.participants.push({ id: uniqueId('p'), name: 'Tom', email: 'tom@mail.de' })
}

export default store
