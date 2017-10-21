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

/**
 * Properly initialize a new exception
 * @return {Object}
 */
const newException = () => ({
  excludeFrom: -1,
  excludeTo: -1
})

export default new Vuex.Store({
  state: {
    participants: [
      { name: 'Thierry', email: 'thierry@mail.de' },
      { name: 'Markus', email: 'markus@mail.de' },
      { name: 'Tom', email: 'tom@mail.de' }
    ],

    exceptions: []
  },

  mutations: {
    /**
     * Add a new empty participant
     */
    addNewParticipant (state) {
      state.participants.push(newParticipant())
    },

    /**
     * Update a part of a participant
     */
    updateParticipant (state, { id, name, email }) {
      if (name) {
        state.participants[id].name = name
      }
      if (email) {
        state.participants[id].email = email
      }
    },

    /**
     * Add a new exception
     */
    addNewException (state) {
      state.exceptions.push(newException())
    },

    /**
     * Update a part of an exception
     */
    updateException (state, { id, excludeFrom, excludeTo }) {
      if (excludeFrom) {
        state.exceptions[id].excludeFrom = parseInt(excludeFrom)
      }
      if (excludeTo) {
        state.exceptions[id].excludeTo = parseInt(excludeTo)
      }
    }
  }
})
