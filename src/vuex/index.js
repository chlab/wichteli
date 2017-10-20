import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Properly initialize a new participant
 * @return {Object}
 */
const newParticipant = () => ({
  name: '',
  email: ''
})

export default new Vuex.Store({
  state: {
    participants: []
  },

  mutations: {
    addNewParticipant (state) {
      state.participants.push(newParticipant())
    }
  }
})
